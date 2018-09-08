import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerAdminOptionsPage } from './partner-admin-options';

@NgModule({
  declarations: [
    PartnerAdminOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerAdminOptionsPage),
  ],
})
export class PartnerAdminOptionsPageModule {}
