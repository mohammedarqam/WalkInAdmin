import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRestaurantsPage } from './user-restaurants';

@NgModule({
  declarations: [
    UserRestaurantsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRestaurantsPage),
  ],
})
export class UserRestaurantsPageModule {}
