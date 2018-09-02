import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-restaurant',
  templateUrl: 'add-restaurant.html',
})
export class AddRestaurantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
