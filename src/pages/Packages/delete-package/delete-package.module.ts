import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePackagePage } from './delete-package';

@NgModule({
  declarations: [
    DeletePackagePage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePackagePage),
  ],
})
export class DeletePackagePageModule {}
