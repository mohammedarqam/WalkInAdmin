import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorViewNotificationsPage } from './vendor-view-notifications';

@NgModule({
  declarations: [
    VendorViewNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorViewNotificationsPage),
  ],
})
export class VendorViewNotificationsPageModule {}
