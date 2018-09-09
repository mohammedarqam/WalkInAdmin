import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestOptionViewPage } from './rest-option-view';

@NgModule({
  declarations: [
    RestOptionViewPage,
  ],
  imports: [
    IonicPageModule.forChild(RestOptionViewPage),
  ],
})
export class RestOptionViewPageModule {}
