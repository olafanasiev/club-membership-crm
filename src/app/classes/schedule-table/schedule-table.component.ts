import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PrimalClassModel} from '../primal-class.model';
import {ClassSchedule, CommunicationService, DaySchedule, ScheduleWeekDay} from '../../shared/communication.service';
import {MatDialog} from '@angular/material/dialog';
import {AddScheduleDialogComponent, PrimalClassSchedule} from './add-schedule-dialog/add-schedule-dialog.component';
import {BehaviorSubject, Subscription} from 'rxjs';
import {SignInDialogComponent} from './sign-in-dialog/sign-in-dialog.component';
import {Moment} from 'moment';
import {forIn} from 'lodash';
import * as _moment from 'moment';
import {
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {DateSelectionStrategy} from './schedule-calendar/date-selection.strategy';
import {ScheduleCalendarHeaderComponent} from './schedule-calendar/schedule.calendar-header.component';
import {SelectionStrategyEventEmitter} from './schedule-calendar/selection-strategy.event-emitter';
import {ScheduleMember} from '../../models/schedule-member.model';

const moment = _moment;

@Component({
  selector: 'app-classes',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: DateSelectionStrategy}, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER]
})
export class ScheduleTableComponent implements OnInit {
  classes: PrimalClassModel[];
  scheduleWeekDays: ScheduleWeekDay[];
  today: Date = new Date();
  schedules$: BehaviorSubject<ClassSchedule[]> = new BehaviorSubject<ClassSchedule[]>([]);
  scheduleDate: DateRange<Moment>;
  scheduleCalendarHeader = ScheduleCalendarHeaderComponent;
  selectMonthSub: Subscription;
  @ViewChild(MatCalendar)
  calendar;
  sortSchedulesFunction = (a: ClassSchedule, b: ClassSchedule): number => {
    if (a.timeStart > b.timeStart) {
      return 1;
    } else if (a.timeStart < b.timeStart) {
      return -1;
    } else {
      return 0;
    }
  }

  constructor(private communicationService: CommunicationService, private dialog: MatDialog,
              private selectionStrategyEventEmitter: SelectionStrategyEventEmitter<Moment>) {
  }


  updateScheduleWeekDates(scheduleDate: DateRange<Moment>) {
    this.scheduleWeekDays = [];
    const startDate = scheduleDate.start.clone();
    const endDate = scheduleDate.end.clone();
    const tmpMoment = moment();
    // console.log("startMonth", startDate.month(), "endDateMonth ", endDate.month() );
    let startDay; //  = startDate.date();
    let endDay; //  =
    if (startDate.month() != endDate.month()) {
      startDay = startDate.date();
      endDay = startDate.daysInMonth();
      for (let day = startDay; day <= endDay; day++) {
        const newMoment = tmpMoment.month(startDate.month()).date(day); // .month(startMonthIdx);
        this.scheduleWeekDays.push({day: newMoment.date(), label: moment.weekdaysShort()[newMoment.day()], date: newMoment.toDate()});
      }

      startDay = 1;
      endDay = endDate.date();
      tmpMoment.month(endDate.month());
    } else {
      startDay = startDate.date();
      endDay = endDate.date();
    }

    for (let day = startDay; day <= endDay; day++) {
      const newMoment = tmpMoment.date(day); // .month(startMonthIdx);
      this.scheduleWeekDays.push({day: newMoment.day(), label: moment.weekdaysShort()[newMoment.day()], date: newMoment.toDate()});
    }

  }


  ngOnInit(): void {
    // this.dayMapping = this.communicationService.getDayMappings();
    this.classes = this.communicationService.getClasses();
    // By default we are using current date
    const fromDate = moment(new Date());
    const toDate = moment(new Date());
    const from = fromDate.startOf('week');
    const to = toDate.endOf('week');
    this.scheduleDate = new DateRange(from, to);
    this.updateScheduleWeekDates(this.scheduleDate);
    this.communicationService.getSchedules(from.toDate(), to.toDate()).subscribe((schedules) => {
      this.schedules$.next(schedules);
    });

    this.selectMonthSub = this.selectionStrategyEventEmitter.selectMonth$.subscribe(() => {
      this.filterScheduleDates(this.calendar.activeDate, 'month');
    });
  }


  filterScheduleDates(value: Moment, strategy?: string) {
    const endDate = value.clone();
    if (!strategy) {
      strategy = this.selectionStrategyEventEmitter.strategyChanged$.getValue();
    }
    let start: Moment;
    let end: Moment;
    switch (strategy) {
      case 'week': {
        start = value.startOf('week');
        end = endDate.endOf('week');
      }
        break;
      case 'month': {
        start = value.startOf('month');
        end = endDate.endOf('month');
      }
        break;

    }

    this.scheduleDate = new DateRange(start, end);
    this.updateScheduleWeekDates(this.scheduleDate);
  }

  signIn(daySchedule: DaySchedule) {
    const signInDate = this.scheduleDate.start.clone()
      .add(daySchedule.dayOfWeek, 'days')
      .startOf('day')
      .add(daySchedule.timeStart, 'milliseconds');

    this.dialog.open(SignInDialogComponent, {width: '300px', data: {daySchedule, signInDate}})
      .afterClosed().subscribe((scheduleMembers: ScheduleMember[]) => {
        if ( scheduleMembers ) {
            // TODO:: add sign in logic here ::
        }

    });
  }

  groupSchedulesByDay(day: string, schedules: ClassSchedule[]): DaySchedule[] {
    return schedules.filter(s => s.day == parseInt(day, 10)).sort(this.sortSchedulesFunction).map<DaySchedule>((s) => {
      return {
        dayOfWeek: s.day,
        timeStart: s.timeStart,
        timeEnd: s.timeEnd,
        capacity: s.capacity,
        signedMembers$: new BehaviorSubject(s.signedMembers || []),
        primalClass: this.classes.find(c => c.id == s.classId),
      };
    });
  }

  addSchedule(day?: string) {
    this.dialog.open(AddScheduleDialogComponent).afterClosed().subscribe((schedule: PrimalClassSchedule) => {
      if (schedule) {
        const newSchedules: ClassSchedule[] = schedule.days.map((newDay) => {
          return {
            id: 0,
            timeStart: schedule.startTime,
            timeEnd: schedule.endTime,
            classId: schedule.selectedClass.id,
            scheduleUntil: schedule.scheduleUntil,
            signedMembers: [],
            day: newDay,
            capacity: schedule.capacity
          };
        });


        this.communicationService.addSchedules(newSchedules).subscribe(classSchedules => {
          const updatedSchedules = [...this.schedules$.getValue(), ...classSchedules];
          updatedSchedules.sort(this.sortSchedulesFunction);
          this.schedules$.next(updatedSchedules);
        });
      }

    });
  }

  remove(daySchedule: DaySchedule) {
    console.log(daySchedule);
  }
}