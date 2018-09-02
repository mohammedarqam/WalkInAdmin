import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartnerAdminsPage } from './partner-admins';

@NgModule({
  declarations: [
    PartnerAdminsPage,
  ],
  imports: [
    IonicPageModule.forChild(PartnerAdminsPage),
  ],
})
export class PartnerAdminsPageModule {}
