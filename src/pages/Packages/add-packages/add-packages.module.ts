import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPackagesPage } from './add-packages';

@NgModule({
  declarations: [
    AddPackagesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPackagesPage),
  ],
})
export class AddPackagesPageModule {}
