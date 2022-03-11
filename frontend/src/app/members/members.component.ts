import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CommunicationService} from '@shared/communication.service';
import {Member} from '@models/member';
import {AddMemberDialogComponent} from '@shared/add-member-dialog/add-member-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {DeletePromptDialogComponent} from '@shared/delete-prompt-dialog/delete-prompt-dialog.component';
import {remove} from 'lodash';
import {interval, of, Subscription} from 'rxjs';
import {MembersService} from './members.service';
import {cloneDeep,range} from 'lodash';
import {concatMap, delay, take} from 'rxjs/operators';
import * as _moment from 'moment';


const moment = _moment;
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns: string[] = ['avatar', 'firstName', 'lastName', 'email', 'phoneNumber', 'gender', 'delete'];
  dataSource: MatTableDataSource<Member>;
  memberCreatedSub: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private membersService: MembersService, private router: Router) {


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    const size = this.paginator.pageSize;
    const offset = this.paginator.pageIndex * size;
    this.membersService.getMembers(size, null, offset).subscribe((members) => {
      this.dataSource.data = members;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Member>();
    this.memberCreatedSub = this.membersService.memberCreated$.subscribe((createdMember) => {
      this.dataSource.data = [createdMember, ...this.dataSource.data];
    })
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  addMember() {
    const newMember = {id: 0, firstName: '', file: '', lastName: '', email: '', gender: 'Male', phoneNumber: ''};




    this.dialog.open(AddMemberDialogComponent, {data: newMember})
      .afterClosed()
      .subscribe((newMember: Member) => {
          this.membersService.saveMember(newMember).toPromise().then((savedMember) => {
            this.membersService.memberCreated.next(savedMember);
          });

      });
  }

  openProfile(row: any) {
    this.router.navigateByUrl('/members/profile/' + row.id);
  }

  onPageChange(pageEvent: PageEvent) {
    const offset = pageEvent.pageIndex * pageEvent.pageSize;
    this.membersService.getMembers(pageEvent.pageSize, null, offset);
  }

  openMemberRemoveDialog(memberData: Member) {
    this.dialog.open(DeletePromptDialogComponent, {data: `Are you sure you want to remove ${memberData.firstName} ${memberData.lastName} from database ? `}).afterClosed().subscribe((doAction) => {
      if (doAction) {
        this.membersService.removeMember(memberData.id).toPromise().then(() => {
          const data = [...this.dataSource.data];
          remove(data, (data) => data.id == memberData.id);
          this.dataSource.data = data;
        }).catch(e => {
          throw e;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.memberCreatedSub.unsubscribe();
  }
}




