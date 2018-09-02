import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewGamesPage } from './view-games';

@NgModule({
  declarations: [
    ViewGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewGamesPage),
  ],
})
export class ViewGamesPageModule {}
