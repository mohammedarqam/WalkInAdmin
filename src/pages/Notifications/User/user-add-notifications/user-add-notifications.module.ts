import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAddNotificationsPage } from './user-add-notifications';

@NgModule({
  declarations: [
    UserAddNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAddNotificationsPage),
  ],
})
export class UserAddNotificationsPageModule {}
