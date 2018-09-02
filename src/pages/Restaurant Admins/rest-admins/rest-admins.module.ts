import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestAdminsPage } from './rest-admins';

@NgModule({
  declarations: [
    RestAdminsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestAdminsPage),
  ],
})
export class RestAdminsPageModule {}
