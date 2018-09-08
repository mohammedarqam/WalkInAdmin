import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerAdminViewPage } from './partner-admin-view';

@NgModule({
  declarations: [
    PartnerAdminViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerAdminViewPage),
  ],
})
export class PartnerAdminViewPageModule {}
