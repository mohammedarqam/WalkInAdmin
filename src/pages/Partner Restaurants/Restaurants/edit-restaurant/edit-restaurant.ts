import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-restaurant',
  templateUrl: 'edit-restaurant.html',
})
export class EditRestaurantPage {


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public navParams: NavParams) {
  
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
