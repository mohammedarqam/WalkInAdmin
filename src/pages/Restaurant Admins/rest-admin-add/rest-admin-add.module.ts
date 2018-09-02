import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestAdminAddPage } from './rest-admin-add';

@NgModule({
  declarations: [
    RestAdminAddPage,
  ],
  imports: [
    IonicPageModule.forChild(RestAdminAddPage),
  ],
})
export class RestAdminAddPageModule {}
