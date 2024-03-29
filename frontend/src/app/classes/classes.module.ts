import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassesRoutingModule} from './classes-routing.module';
import {ScheduleTableComponent} from './schedule-table/schedule-table.component';
import {SharedModule} from '@shared/shared.module';
import {AddScheduleDialogComponent} from './schedule-table/add-schedule-dialog/add-schedule-dialog.component';
import {FormsModule} from '@angular/forms';
import {SignInDialogComponent} from './schedule-table/sign-in-dialog/sign-in-dialog.component';
import {ScheduleCalendarHeaderComponent} from './schedule-table/schedule-calendar/schedule.calendar-header.component';
import {SelectionStrategyEventEmitter} from './schedule-table/schedule-calendar/selection-strategy.event-emitter';
import {ClassNameByIdPipe} from './class-name-by-id.pipe';
import {ClassListComponent} from './class-list/class-list.component';
import {CreateClassDialogComponent} from './class-list/create-class-dialog/create-class-dialog.component';
import { ClassTypesComponent } from './class-types/class-types.component';
import { SignedMembersPipe } from './signed-members.pipe';
import { SignedMembersSizePipe } from './signed-members-size.pipe';

@NgModule({
  declarations: [ScheduleTableComponent,
    ScheduleCalendarHeaderComponent,
    AddScheduleDialogComponent,
    SignInDialogComponent,
    ClassListComponent,
    CreateClassDialogComponent,
    ClassNameByIdPipe,
    ClassTypesComponent,
    SignedMembersPipe,
    SignedMembersSizePipe],
  providers: [SelectionStrategyEventEmitter, SignedMembersPipe],
  imports: [
    CommonModule,
    SharedModule,
    ClassesRoutingModule,
    FormsModule
  ]
})
export class ClassesModule {
}
