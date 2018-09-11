import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewFoodCategoriesPage } from './view-food-categories';

@NgModule({
  declarations: [
    ViewFoodCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewFoodCategoriesPage),
  ],
})
export class ViewFoodCategoriesPageModule {}
