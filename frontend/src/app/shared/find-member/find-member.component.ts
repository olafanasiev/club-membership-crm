import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {concatMap, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {Member} from '@models/member';
import {Router} from '@angular/router';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {isEmpty} from 'lodash';
import {MembersService} from '../../members/members.service';
import {AddMemberDialogComponent} from '@shared/add-member-dialog/add-member-dialog.component';
@Component({
  selector: 'app-find-member',
  templateUrl: './find-member.component.html',
  styleUrls: ['./find-member.component.scss']
})
export class FindMemberComponent implements OnInit, AfterViewInit {
  @ViewChild('searchField') searchInput: ElementRef;
  @Input()
  labelColor = '#FFF';
  @Input()
  placeholder;
  @Input()
  selectedMember: Member;
  @Input()
  clearAfterSelection = false;
  @Output()
  memberSelected: EventEmitter<Member> = new EventEmitter<Member>();
  members$: Observable<Member[]>;
  searchFormControl: FormControl;
  showNewMemberOption = false;

  constructor(public dialog: MatDialog, private membersService: MembersService, private router: Router) {
  }

  displayFn(member: Member) {
    if (member && member.firstName && member.lastName) {
      return `${member.firstName} ${member.lastName} mob: ${member.phoneNumber}`;
    } else {
      return '';
    }

  }

  ngOnInit() {
    this.searchFormControl = new FormControl(this.selectedMember ? this.selectedMember : null);
  }

  ngAfterViewInit(): void {
    this.members$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        tap(() => { this.showNewMemberOption = true; }),
        map(event => event.target.value),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap(search => this.loadMembers((search)))
      );
  }

  memberSelect($event: MatAutocompleteSelectedEvent) {
    if (this.searchFormControl.value) {
      this.memberSelected.emit(this.searchFormControl.value);
      if (this.clearAfterSelection) {
        this.searchFormControl.patchValue(null);
      }
    }
  }

  loadMembers(search): Observable<Member[]> {
    if( !isEmpty(search)) {
      return this.membersService.findMembers(search).pipe( concatMap(value => of(value.data)));
    }
    return of([]);
  }

  openUserRegistrationForm() {
    const newMember = {id: 0, firstName: '', lastName: '', email: '', gender: 'Male', phoneNumber: ''};
    this.searchInput.nativeElement.blur();
    this.showNewMemberOption = false;
    this.dialog.open(AddMemberDialogComponent, {data: newMember})
      .afterClosed()
      .subscribe((newMember: Member) => {
        if ( newMember ) {
          this.membersService.saveMember(newMember).toPromise().then((savedMember) => {
            this.membersService.memberCreated.next(savedMember);
            this.memberSelected.emit(savedMember);
          });
        }
      });
  }
}
