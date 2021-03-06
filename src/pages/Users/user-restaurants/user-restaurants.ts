import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-user-restaurants',
  templateUrl: 'user-restaurants.html',
})
export class UserRestaurantsPage {


  user = this.navParams.get("user");

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public navParams: NavParams
  ) {
    console.log(this.user);
  }


  close(){
    this.viewCtrl.dismiss();
  }


}
