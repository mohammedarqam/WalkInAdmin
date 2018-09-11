import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFoodCategoriesPage } from './add-food-categories';

@NgModule({
  declarations: [
    AddFoodCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFoodCategoriesPage),
  ],
})
export class AddFoodCategoriesPageModule {}
