import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerAdminEditPage } from './partner-admin-edit';

@NgModule({
  declarations: [
    PartnerAdminEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerAdminEditPage),
  ],
})
export class PartnerAdminEditPageModule {}
