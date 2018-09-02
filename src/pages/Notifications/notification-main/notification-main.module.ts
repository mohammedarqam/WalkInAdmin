import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationMainPage } from './notification-main';

@NgModule({
  declarations: [
    NotificationMainPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationMainPage),
  ],
})
export class NotificationMainPageModule {}
