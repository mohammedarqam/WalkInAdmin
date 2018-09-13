import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserBalancesPage } from './user-balances';

@NgModule({
  declarations: [
    UserBalancesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserBalancesPage),
  ],
})
export class UserBalancesPageModule {}
