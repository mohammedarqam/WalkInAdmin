import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsViewPage } from './faqs-view';

@NgModule({
  declarations: [
    FaqsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqsViewPage),
  ],
})
export class FaqsViewPageModule {}
