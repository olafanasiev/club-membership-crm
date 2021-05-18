import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';


const routes: Routes = [{path: '', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule), canActivate: [AuthGuard]},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {
    path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule), canActivate: [AuthGuard]
  },
  {
    path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule), canActivate: [AuthGuard]
  },
  {
    path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}