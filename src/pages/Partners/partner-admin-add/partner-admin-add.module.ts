import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerAdminAddPage } from './partner-admin-add';

@NgModule({
  declarations: [
    PartnerAdminAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerAdminAddPage),
  ],
})
export class PartnerAdminAddPageModule {}
