import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayZoneDetailsPage } from './play-zone-details';

@NgModule({
  declarations: [
    PlayZoneDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayZoneDetailsPage),
  ],
})
export class PlayZoneDetailsPageModule {}
