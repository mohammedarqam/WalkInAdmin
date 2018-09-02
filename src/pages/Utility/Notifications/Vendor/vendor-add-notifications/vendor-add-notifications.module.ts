import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorAddNotificationsPage } from './vendor-add-notifications';

@NgModule({
  declarations: [
    VendorAddNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorAddNotificationsPage),
  ],
})
export class VendorAddNotificationsPageModule {}
