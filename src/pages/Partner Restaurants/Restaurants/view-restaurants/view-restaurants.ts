import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant';
import { EditRestaurantPage } from '../edit-restaurant/edit-restaurant';

@IonicPage()
@Component({
  selector: 'page-view-restaurants',
  templateUrl: 'view-restaurants.html',
})
export class ViewRestaurantsPage {



  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams) {

  }

addRestaurant(){
  this.navCtrl.setRoot(AddRestaurantPage);
}

editRestaurant(restKey){
  this.navCtrl.setRoot(EditRestaurantPage,{restKey : restKey});
}

}
