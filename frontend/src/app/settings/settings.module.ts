import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {SharedModule} from '@shared/shared.module';
import {SettingsRoutingModule} from './settings-routing.module';
import {ClassSettingsComponent} from './settings-page/classes/class-settings/class-settings.component';
import {PaymentMethodsSettingsComponent} from './settings-page/payment-methods-settings/payment-methods-settings.component';
import {PaymentMethodCreateDialogComponent} from './settings-page/payment-methods-settings/payment-method-create-dialog/payment-method-create-dialog.component';
import {SalesSettingsComponent} from './settings-page/sales-settings/sales-settings.component';
import {SalesDialogComponent} from './settings-page/sales-settings/sales-dialog/sales-dialog.component';
import {CreateClassDialogComponent} from './settings-page/classes/class-settings/create-class-dialog/create-class-dialog.component';
import {UsersComponent} from './settings-page/users/users.component';
import {UserMergeDialogComponent} from './settings-page/users/user-merge-dialog/user-merge-dialog.component';
import {PaymentMethodService} from './settings-page/payment-methods-settings/payment-method.service';
import { UserRolePipe } from './settings-page/users/user-role.pipe';


@NgModule({
  declarations: [SettingsPageComponent,
    CreateClassDialogComponent,
    PaymentMethodCreateDialogComponent,
    ClassSettingsComponent,
    PaymentMethodsSettingsComponent,
    SalesSettingsComponent,
    UserMergeDialogComponent,
    SalesDialogComponent,
    UsersComponent,
    UserRolePipe],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {
}
