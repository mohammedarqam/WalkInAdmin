import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-restaurant',
  templateUrl: 'edit-restaurant.html',
})
export class EditRestaurantPage {

  restaurant  = this.navParams.get('restKey');

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams) {
  
    console.log(this.restaurant);
  }


}
