import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGamesPage } from './add-games';

@NgModule({
  declarations: [
    AddGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGamesPage),
  ],
})
export class AddGamesPageModule {}
