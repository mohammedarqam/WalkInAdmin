import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserViewNotificationsPage } from './user-view-notifications';

@NgModule({
  declarations: [
    UserViewNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserViewNotificationsPage),
  ],
})
export class UserViewNotificationsPageModule {}
