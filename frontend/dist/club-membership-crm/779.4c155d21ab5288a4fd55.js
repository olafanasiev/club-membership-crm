(self.webpackChunkclub_membership_crm=self.webpackChunkclub_membership_crm||[]).push([[779],{8779:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SettingsModule:()=>Tt});var a=n(1116),i=n(8030),r=n(3464),o=n(5366),s=n(7173),c=n(1041),l=n(2935),m=n(5963),u=n(5965),d=n(3070),g=n(9550),h=n(4369);let p=(()=>{class t{constructor(t,e,n,a){this.communicationService=t,this.dialogRef=e,this.fb=n,this.data=a}ngOnInit(){this.formGroup=this.fb.group({id:[this.data.id],name:[this.data.name,[c.kI.required]]})}merge(){this.dialogRef.close(this.formGroup.value)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m.O),o.Y36(l.so),o.Y36(c.qu),o.Y36(l.WI))},t.\u0275cmp=o.Xpm({type:t,selectors:[["payment-method-create-class-dialog"]],decls:8,vars:1,consts:[["fxLayout","column",3,"formGroup","ngSubmit"],["placeholder","Payment method name","matInput","","formControlName","name"],["mat-dialog-close","","color","warn","mat-button",""],["color","primary","mat-raised-button","","type","submit"]],template:function(t,e){1&t&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return e.merge()}),o.TgZ(1,"mat-form-field"),o._UZ(2,"input",1),o.qZA(),o.TgZ(3,"mat-dialog-actions"),o.TgZ(4,"button",2),o._uU(5,"Cancel"),o.qZA(),o.TgZ(6,"button",3),o._uU(7,"Save"),o.qZA(),o.qZA(),o.qZA()),2&t&&o.Q6J("formGroup",e.formGroup)},directives:[c._Y,c.JL,u.xw,c.sg,d.KE,g.Nt,c.Fj,c.JJ,c.u,l.H8,h.lW,l.ZT],styles:[""]}),t})();var f=n(9752),Z=n(5609),A=n(9199),b=n(289),v=n(9241),q=n(7307);function T(t,e){1&t&&(o.TgZ(0,"th",16),o._uU(1,"Payment Methods"),o.qZA())}function _(t,e){if(1&t&&(o.TgZ(0,"td",17),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.name," ")}}function C(t,e){1&t&&o._UZ(0,"th",16)}function w(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"td",18),o.TgZ(1,"mat-icon",19),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().showPaymentMethodDialog(e)}),o._uU(2,"edit"),o.qZA(),o.qZA()}}function y(t,e){1&t&&o._UZ(0,"th",20)}function x(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"td",21),o.TgZ(1,"mat-icon",19),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().removePaymentMethod(e)}),o._uU(2,"delete"),o.qZA(),o.qZA()}}function N(t,e){1&t&&o._UZ(0,"tr",22)}function U(t,e){1&t&&o._UZ(0,"tr",23)}function M(t,e){1&t&&(o.TgZ(0,"tr",24),o.TgZ(1,"td",25),o._uU(2,"No payment methods created yet"),o.qZA(),o.qZA())}const P=function(){return[5]};let O=(()=>{class t{constructor(t,e){this.dialog=t,this.paymentService=e,this.displayColumns=["name","edit","delete"]}ngOnInit(){this.dataSource=new A.by,this.paymentService.paymentMethods$.subscribe(t=>this.dataSource.data=t)}_newPaymentMethod(){return{id:0,name:""}}ngAfterViewInit(){this.dataSource.paginator=this.paginator}remove(t){this.dialog.open(f.X,{data:`Are you sure you want to delete class ${t.name}`}).afterClosed().subscribe(e=>{e&&this.paymentService.removePaymentMethod(t.id)})}showPaymentMethodDialog(t){t=null!=t?t:this._newPaymentMethod(),this.dialog.open(p,{data:t}).afterClosed().subscribe(t=>{t&&this.paymentService.addPaymentMethod(t)})}removePaymentMethod(t){this.dialog.open(f.X,{data:`Are you sure you want to remove ${t.name} ?`}).afterClosed().subscribe(()=>{this.paymentService.removePaymentMethod(t.id)})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l.uw),o.Y36(b.X))},t.\u0275cmp=o.Xpm({type:t,selectors:[["payment-methods-settings"]],viewQuery:function(t,e){if(1&t&&o.Gf(Z.NW,5),2&t){let t;o.iGM(t=o.CRH())&&(e.paginator=t.first)}},decls:19,vars:6,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"payment-settings-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","edit"],["class","edit-cell","mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["mat-header-cell","",4,"matHeaderCellDef"],["class","delete-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["fxLayoutAlign","space-between center"],["showFirstLastButtons","",3,"hidePageSize","pageSizeOptions"],["mat-mini-fab","",1,"add-button",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-cell","",1,"edit-cell"],[3,"click"],["mat-header-cell",""],["mat-cell","",1,"delete-cell"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"table",1),o.ynx(2,2),o.YNc(3,T,2,0,"th",3),o.YNc(4,_,2,1,"td",4),o.BQk(),o.ynx(5,5),o.YNc(6,C,1,0,"th",3),o.YNc(7,w,3,0,"td",6),o.BQk(),o.ynx(8,7),o.YNc(9,y,1,0,"th",8),o.YNc(10,x,3,0,"td",9),o.BQk(),o.YNc(11,N,1,0,"tr",10),o.YNc(12,U,1,0,"tr",11),o.YNc(13,M,3,0,"tr",12),o.qZA(),o.TgZ(14,"div",13),o._UZ(15,"mat-paginator",14),o.TgZ(16,"button",15),o.NdJ("click",function(){return e.showPaymentMethodDialog()}),o.TgZ(17,"mat-icon"),o._uU(18,"add "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Q6J("dataSource",e.dataSource),o.xp6(10),o.Q6J("matHeaderRowDef",e.displayColumns),o.xp6(1),o.Q6J("matRowDefColumns",e.displayColumns),o.xp6(3),o.Q6J("hidePageSize",!0)("pageSizeOptions",o.DdM(5,P)))},directives:[u.xw,u.Wh,A.BZ,v.YE,A.w1,A.fO,A.Dz,A.as,A.nj,A.Ee,Z.NW,h.lW,q.Hw,A.ge,v.nU,A.ev,A.XQ,A.Gk],styles:[".delete-cell[_ngcontent-%COMP%], .edit-cell[_ngcontent-%COMP%]{width:30px;cursor:pointer;text-align:center}.delete-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .edit-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;min-width:35px;max-width:35px}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .table-header-title[_ngcontent-%COMP%]{margin-right:20px}.payment-settings-container[_ngcontent-%COMP%]{height:353px;max-height:353px}"]}),t})();var S=n(9624),Y=n(1293),D=n(3841),k=n(7064);const J=["avatarFileChoose"],Q=["userAvatarPreview"];function F(t,e){1&t&&(o.TgZ(0,"mat-hint"),o._uU(1,"This field is required"),o.qZA())}function I(t,e){1&t&&(o.TgZ(0,"mat-hint"),o._uU(1,"This field is required"),o.qZA())}function B(t,e){1&t&&(o.TgZ(0,"mat-hint"),o._uU(1,"This field is required"),o.qZA())}function L(t,e){if(1&t&&(o.TgZ(0,"mat-option",20),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.Q6J("value",t.id),o.xp6(1),o.Oqu(t.name)}}function R(t,e){if(1&t&&(o.TgZ(0,"mat-option",20),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.Q6J("value",t.key),o.xp6(1),o.hij(" ",t.value.label,"")}}const H=function(t){return{"drop-area":!0,highlighted:t}};let $=(()=>{class t{constructor(t,e,n,a){this.data=t,this.fb=e,this.domSanitizer=n,this.communicationService=a,this.title="Registering new user",this.avatarDisplay="none",this.avatarSrc=""}ngOnInit(){this.roles=this.communicationService.getUserRoles(),this.userForm=this.fb.group({id:[0],firstName:[this.data.firstName,[c.kI.required]],lastName:[this.data.lastName,[c.kI.required]],username:[this.data.username,[c.kI.required]],password:[this.data.password,[c.kI.required]],image:["",[c.kI.required]],email:[this.data.lastName,[c.kI.email]],role:[this.data.role,[c.kI.required]],phoneNumber:[this.data.phoneNumber,null],branches:[this.data.branches,[c.kI.required]]})}handleAvatar(t){this.handleAvatarChange(t.target.files)}handleAvatarChange(t){if(t){const[e]=t;this.userForm.patchValue({image:e}),this.avatarSrc=this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(e)),this.avatarDisplay="block"}else this.avatarSrc="",this.avatarDisplay="none"}handleAvatarDrop(t){var e;t.preventDefault(),t.stopPropagation(),(null===(e=t.dataTransfer)||void 0===e?void 0:e.files)&&this.handleAvatarChange(t.dataTransfer.files)}highlightBorder(t,e){t.preventDefault(),t.stopPropagation(),this.doBorderHighlight=e}openAvatarFileChoose(){this.avatarFileChoose.nativeElement.click()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l.WI),o.Y36(c.qu),o.Y36(S.H7),o.Y36(m.O))},t.\u0275cmp=o.Xpm({type:t,selectors:[["user-merge-dialog"]],viewQuery:function(t,e){if(1&t&&(o.Gf(J,5),o.Gf(Q,5)),2&t){let t;o.iGM(t=o.CRH())&&(e.avatarFileChoose=t.first),o.iGM(t=o.CRH())&&(e.avatarElRef=t.first)}},decls:60,vars:17,consts:[["mat-dialog-title",""],["fxFlex","","fxLayoutAlign","space-between",3,"formGroup"],[1,"member-picture-container"],["fxLayoutAlign","center center",3,"ngClass","click","dragover","dragenter","dragleave","drop"],["width","100%","height","100%",1,"member-avatar",3,"src","click"],["type","file","accept","image/*",1,"avatar-file-target",3,"change"],["avatarFileChoose",""],[1,"member-fields"],["type","text","matInput","","formControlName","username"],[4,"ngIf"],["type","password","matInput","","formControlName","password"],["type","text","matInput","","formControlName","firstName"],["type","text","matInput","","formControlName","lastName"],["type","text","matInput","","formControlName","phoneNumber"],["type","email","matInput","","formControlName","email"],["placeholder","Please select user branch","formControlName","branchId",3,"multiple"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Please select user role","formControlName","role"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){1&t&&(o.TgZ(0,"h2",0),o._uU(1),o.qZA(),o.TgZ(2,"mat-dialog-content"),o.TgZ(3,"form",1),o.TgZ(4,"div",2),o.TgZ(5,"div",3),o.NdJ("click",function(){return e.openAvatarFileChoose()})("dragover",function(t){return e.highlightBorder(t,!0)})("dragenter",function(t){return e.highlightBorder(t,!0)})("dragleave",function(t){return e.highlightBorder(t,!1)})("drop",function(t){return e.handleAvatarDrop(t)}),o._uU(6," Drop picture here or select "),o.qZA(),o.TgZ(7,"img",4),o.NdJ("click",function(){return e.openAvatarFileChoose()}),o.qZA(),o.TgZ(8,"input",5,6),o.NdJ("change",function(t){return e.handleAvatar(t)}),o.qZA(),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"div"),o.TgZ(12,"mat-form-field"),o.TgZ(13,"mat-label"),o._uU(14,"Username"),o.qZA(),o._UZ(15,"input",8),o.qZA(),o.YNc(16,F,2,0,"mat-hint",9),o.qZA(),o.TgZ(17,"div"),o.TgZ(18,"mat-form-field"),o.TgZ(19,"mat-label"),o._uU(20,"Password"),o.qZA(),o._UZ(21,"input",10),o.qZA(),o.YNc(22,I,2,0,"mat-hint",9),o.qZA(),o.TgZ(23,"div"),o.TgZ(24,"mat-form-field"),o.TgZ(25,"mat-label"),o._uU(26,"First name"),o.qZA(),o._UZ(27,"input",11),o.qZA(),o.YNc(28,B,2,0,"mat-hint",9),o.qZA(),o.TgZ(29,"div"),o.TgZ(30,"mat-form-field"),o.TgZ(31,"mat-label"),o._uU(32,"Last name"),o.qZA(),o._UZ(33,"input",12),o.qZA(),o.qZA(),o.TgZ(34,"div"),o.TgZ(35,"mat-form-field"),o.TgZ(36,"mat-label"),o._uU(37,"Phone number"),o.qZA(),o._UZ(38,"input",13),o.qZA(),o.qZA(),o.TgZ(39,"div"),o.TgZ(40,"mat-form-field"),o.TgZ(41,"mat-label"),o._uU(42,"Email"),o.qZA(),o._UZ(43,"input",14),o.qZA(),o.qZA(),o.TgZ(44,"div"),o.TgZ(45,"mat-form-field"),o.TgZ(46,"mat-select",15),o.TgZ(47,"mat-option"),o._uU(48,"All"),o.qZA(),o.YNc(49,L,2,2,"mat-option",16),o.qZA(),o.qZA(),o.qZA(),o.TgZ(50,"div"),o.TgZ(51,"mat-form-field"),o.TgZ(52,"mat-select",17),o.YNc(53,R,2,2,"mat-option",16),o.ALo(54,"keyvalue"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(55,"mat-dialog-actions"),o.TgZ(56,"button",18),o._uU(57,"Cancel"),o.qZA(),o.TgZ(58,"button",19),o._uU(59,"Create"),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Oqu(e.title),o.xp6(2),o.Q6J("formGroup",e.userForm),o.xp6(2),o.Q6J("ngClass",o.VKq(15,H,e.doBorderHighlight)),o.xp6(2),o.Udp("display",e.avatarDisplay),o.Q6J("src",e.avatarSrc,o.LSH),o.xp6(9),o.Q6J("ngIf",null==e.userForm.errors?null:e.userForm.errors.username.required),o.xp6(6),o.Q6J("ngIf",null==e.userForm.errors?null:e.userForm.errors.password.required),o.xp6(6),o.Q6J("ngIf",null==e.userForm.errors?null:e.userForm.errors.firstName.required),o.xp6(18),o.Q6J("multiple",!0),o.xp6(3),o.Q6J("ngForOf",e.communicationService.getBranches()),o.xp6(4),o.Q6J("ngForOf",o.lcZ(54,13,e.roles)),o.xp6(5),o.Q6J("mat-dialog-close",e.userForm.value))},directives:[l.uh,l.xY,c._Y,c.JL,u.yH,u.Wh,c.sg,a.mk,Y.oO,d.KE,d.hX,g.Nt,c.Fj,c.JJ,c.u,a.O5,D.gD,k.ey,a.sg,l.H8,h.lW,l.ZT,d.bx],pipes:[a.Nd],styles:[".member-picture-container[_ngcontent-%COMP%]{margin-right:20px;width:50%;min-width:180px;position:relative;height:90%}.member-picture-container[_ngcontent-%COMP%]   .drop-area[_ngcontent-%COMP%]{border:1px dashed #000;padding:20px;box-sizing:border-box;height:100%;transition:border,color .2s linear}.member-picture-container[_ngcontent-%COMP%]   .drop-area.highlighted[_ngcontent-%COMP%]{border:1px dashed rgba(0,117,169,.8);transition:border,color .2s linear;color:rgba(0,117,169,.8)}.member-picture-container[_ngcontent-%COMP%]   .member-avatar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;object-fit:cover}.member-picture-container[_ngcontent-%COMP%]   .avatar-file-target[_ngcontent-%COMP%]{visibility:hidden}"]}),t})();var j=n(786),G=n(164),z=n(9437);let E=(()=>{class t{constructor(t){this.communicationService=t}transform(t,...e){return this.communicationService.getUserRoles().get(t).label}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m.O,16))},t.\u0275pipe=o.Yjl({name:"userRole",type:t,pure:!0}),t})(),W=(()=>{class t{constructor(t){this.communicationService=t}transform(t,...e){let[n]=e;return n?this.communicationService.getBranches().find(t=>t.id==n).name:"All"}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m.O,16))},t.\u0275pipe=o.Yjl({name:"branchName",type:t,pure:!0}),t})();function X(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o._UZ(2,"div",23),o.qZA(),o.qZA())}function K(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"td",24),o.TgZ(1,"img",25,26),o.NdJ("error",function(){return o.CHM(t),o.MAs(2).src="/assets/member-not-found.png"}),o.ALo(3,"localImageLink"),o.qZA(),o.qZA()}if(2&t){const t=e.$implicit;o.xp6(1),o.Q6J("src",o.lcZ(3,1,t.photoLink),o.LSH)}}function V(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3," Username"),o.qZA(),o.qZA(),o.qZA())}function tt(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.username," ")}}function et(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3," First name"),o.qZA(),o.qZA(),o.qZA())}function nt(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij("",t.firstName," ")}}function at(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3,"Last name"),o.qZA(),o.qZA(),o.qZA())}function it(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.lastName," ")}}function rt(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3,"Phone number"),o.qZA(),o.qZA(),o.qZA())}function ot(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.phoneNumber," ")}}function st(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3,"Role"),o.qZA(),o.qZA(),o.qZA())}function ct(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.ALo(2,"userRole"),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",o.lcZ(2,1,t.role)," ")}}function lt(t,e){1&t&&(o.TgZ(0,"th",21),o.TgZ(1,"div",22),o.TgZ(2,"div",23),o._uU(3,"Branch"),o.qZA(),o.qZA(),o.qZA())}function mt(t,e){if(1&t&&(o.TgZ(0,"td",24),o._uU(1),o.ALo(2,"branchName"),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",o.xi3(2,1,t,t.branchId)," ")}}function ut(t,e){1&t&&o._UZ(0,"th",21)}function dt(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"td",27),o.TgZ(1,"button",28),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().edit(e)}),o.TgZ(2,"mat-icon"),o._uU(3,"edit"),o.qZA(),o.qZA(),o.qZA()}}function gt(t,e){1&t&&o._UZ(0,"th",21)}function ht(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"td",29),o.TgZ(1,"button",28),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().remove(e)}),o.TgZ(2,"mat-icon"),o._uU(3,"delete"),o.qZA(),o.qZA(),o.qZA()}}function pt(t,e){1&t&&o._UZ(0,"tr",30)}function ft(t,e){1&t&&o._UZ(0,"tr",31)}function Zt(t,e){1&t&&(o.TgZ(0,"tr",32),o.TgZ(1,"td",33),o._uU(2,"No users created yet"),o.qZA(),o.qZA())}const At=function(){return[5]};let bt=(()=>{class t{constructor(t,e,n){this.userService=t,this.dialog=e,this.helpers=n,this.columns=["photoLink","username","firstName","lastName","phoneNumber","role","branch","edit","delete"]}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.userService.getAll().toPromise(),this.dataSource=new A.by,this.usersSub=this.userService.users$.subscribe(t=>this.dataSource.data=t)}ngOnDestroy(){this.usersSub.unsubscribe()}_newUser(){return{id:0,firstName:"",lastName:"",phoneNumber:"",email:"",password:"",username:"",branches:[],role:""}}addNew(){this.showMergeDialog()}showMergeDialog(t){t=null!=t?t:this._newUser(),this.dialog.open($,{data:t}).afterClosed().subscribe(t=>{if(t){const e=this.helpers.toFormData(t);this.userService.addUser(e).toPromise()}})}remove(t){this.dialog.open(f.X,{data:`Are you sure you want to delete user ${t.firstName}`}).afterClosed().subscribe(e=>{e&&this.userService.delete(t.id.toString())})}edit(t){this.showMergeDialog(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(j.K),o.Y36(l.uw),o.Y36(G.$))},t.\u0275cmp=o.Xpm({type:t,selectors:[["user-settings"]],viewQuery:function(t,e){if(1&t&&o.Gf(Z.NW,5),2&t){let t;o.iGM(t=o.CRH())&&(e.paginator=t.first)}},decls:37,vars:6,consts:[["fxLayout","column","fxLayoutAlign","space-between",1,"user-settings-container"],["mat-table","",3,"dataSource"],["matColumnDef","photoLink"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","phoneNumber"],["matColumnDef","role"],["matColumnDef","branch"],["matColumnDef","edit"],["class","edit-cell","mat-cell","",4,"matCellDef"],["matColumnDef","delete"],["class","delete-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["fxLayoutAlign","space-between center"],["showFirstLastButtons","",3,"hidePageSize","pageSizeOptions"],["mat-mini-fab","",1,"add-button",3,"click"],["mat-header-cell",""],["fxLayoutAlign","start center","fxLayout",""],[1,"table-header-title"],["mat-cell",""],["width","60","height","90",1,"user-image",3,"src","error"],["userImg",""],["mat-cell","",1,"edit-cell"],["mat-flat-button","",3,"click"],["mat-cell","",1,"delete-cell"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"table",1),o.ynx(2,2),o.YNc(3,X,3,0,"th",3),o.YNc(4,K,4,3,"td",4),o.BQk(),o.ynx(5,5),o.YNc(6,V,4,0,"th",3),o.YNc(7,tt,2,1,"td",4),o.BQk(),o.ynx(8,6),o.YNc(9,et,4,0,"th",3),o.YNc(10,nt,2,1,"td",4),o.BQk(),o.ynx(11,7),o.YNc(12,at,4,0,"th",3),o.YNc(13,it,2,1,"td",4),o.BQk(),o.ynx(14,8),o.YNc(15,rt,4,0,"th",3),o.YNc(16,ot,2,1,"td",4),o.BQk(),o.ynx(17,9),o.YNc(18,st,4,0,"th",3),o.YNc(19,ct,3,3,"td",4),o.BQk(),o.ynx(20,10),o.YNc(21,lt,4,0,"th",3),o.YNc(22,mt,3,4,"td",4),o.BQk(),o.ynx(23,11),o.YNc(24,ut,1,0,"th",3),o.YNc(25,dt,4,0,"td",12),o.BQk(),o.ynx(26,13),o.YNc(27,gt,1,0,"th",3),o.YNc(28,ht,4,0,"td",14),o.BQk(),o.YNc(29,pt,1,0,"tr",15),o.YNc(30,ft,1,0,"tr",16),o.YNc(31,Zt,3,0,"tr",17),o.qZA(),o.TgZ(32,"div",18),o._UZ(33,"mat-paginator",19),o.TgZ(34,"button",20),o.NdJ("click",function(){return e.addNew()}),o.TgZ(35,"mat-icon"),o._uU(36,"add "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Q6J("dataSource",e.dataSource),o.xp6(28),o.Q6J("matHeaderRowDef",e.columns),o.xp6(1),o.Q6J("matRowDefColumns",e.columns),o.xp6(3),o.Q6J("hidePageSize",!0)("pageSizeOptions",o.DdM(5,At)))},directives:[u.xw,u.Wh,A.BZ,A.w1,A.fO,A.Dz,A.as,A.nj,A.Ee,Z.NW,h.lW,q.Hw,A.ge,A.ev,A.XQ,A.Gk],pipes:[z.G,E,W],styles:[".delete-cell[_ngcontent-%COMP%], .edit-cell[_ngcontent-%COMP%]{width:30px;cursor:pointer;text-align:center}.delete-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .edit-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;min-width:35px;max-width:35px}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .table-header-title[_ngcontent-%COMP%]{margin-right:20px}.user-settings-container[_ngcontent-%COMP%]{height:353px;max-height:353px}.user-image[_ngcontent-%COMP%]{object-fit:scale-down}"]}),t})();const vt=[{path:"",component:(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-settings-page"]],decls:5,vars:0,consts:[["label","Payment methods"],["label","Users"]],template:function(t,e){1&t&&(o.TgZ(0,"mat-tab-group"),o.TgZ(1,"mat-tab",0),o._UZ(2,"payment-methods-settings"),o.qZA(),o.TgZ(3,"mat-tab",1),o._UZ(4,"user-settings"),o.qZA(),o.qZA())},directives:[s.SP,s.uX,O,bt],styles:[".settings-page-wrapper[_ngcontent-%COMP%]{display:inline-grid;grid-template-columns:50% 50%;grid-column-gap:0;width:100%}.settings-page-wrapper[_ngcontent-%COMP%]   class-settings[_ngcontent-%COMP%]{padding-right:100px}.settings-page-wrapper[_ngcontent-%COMP%]   payment-methods-settings[_ngcontent-%COMP%]{padding-left:100px}.settings-page-wrapper[_ngcontent-%COMP%]   sales-settings[_ngcontent-%COMP%]{margin-top:30px;padding-right:100px}.settings-page-wrapper[_ngcontent-%COMP%]   user-settings[_ngcontent-%COMP%]{padding-left:100px}"]}),t})()}];let qt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(vt)],r.Bz]}),t})(),Tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,i.m,qt]]}),t})()}}]);