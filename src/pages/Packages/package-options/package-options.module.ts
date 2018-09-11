import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageOptionsPage } from './package-options';

@NgModule({
  declarations: [
    PackageOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackageOptionsPage),
  ],
})
export class PackageOptionsPageModule {}
