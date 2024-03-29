import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {Member} from '@models/member';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  title = 'Registering new member';
  memberForm: FormGroup;
  doBorderHighlight: boolean;
  @ViewChild('avatarFileChoose')
  avatarFileChoose: ElementRef;
  @ViewChild('userAvatarPreview')
  memberAvatar: ElementRef;
  memberAvatarDisplay: string = 'none';
  memberAvatarSrc: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Member, private fb: FormBuilder, private domSanitizer: DomSanitizer) {
  }


  ngOnInit(): void {
    this.memberForm = this.fb.group({
        id: [0],
        firstName: [this.data.firstName, [Validators.required]],
        lastName: [this.data.lastName, [Validators.required]],
        dob: [null, [Validators.required]],
        image: ['', [Validators.required]],
        email: [this.data.lastName, [Validators.email]],
        phoneNumber: [this.data.phoneNumber, null],
        emergencyPhone: [this.data.emergencyPhone, null],
        gender: [this.data.gender, null],
        type: [this.data.type, Validators.required]
      }
    );
  }

  handleAvatar(e: Event) {
    const imgs = (<any> e.target).files;
    this.handleAvatarChange(imgs);
  }

  handleAvatarChange(imgs) {
    if (imgs) {
      const [img] = imgs;
      this.memberForm.patchValue({image: img});
      this.memberAvatarSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(img)) as string;
      this.memberAvatarDisplay = 'block';
    } else {
      this.memberAvatarSrc = '';
      this.memberAvatarDisplay = 'none';
    }
  }

  handleAvatarDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer?.files) {
      this.handleAvatarChange(e.dataTransfer.files);
    }
  }

  highlightBorder(e: DragEvent, doHighlight: boolean) {
    e.preventDefault();
    e.stopPropagation();
    this.doBorderHighlight = doHighlight;
  }

  openAvatarFileChoose() {
    this.avatarFileChoose.nativeElement.click();
  }
}
