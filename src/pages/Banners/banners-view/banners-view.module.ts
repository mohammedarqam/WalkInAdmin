import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BannersViewPage } from './banners-view';

@NgModule({
  declarations: [
    BannersViewPage,
  ],
  imports: [
    IonicPageModule.forChild(BannersViewPage),
  ],
})
export class BannersViewPageModule {}
