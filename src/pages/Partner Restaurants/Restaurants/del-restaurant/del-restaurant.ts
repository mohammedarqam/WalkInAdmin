import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-del-restaurant',
  templateUrl: 'del-restaurant.html',
})
export class DelRestaurantPage {

  rName : string;
  restaurant = this.navParams.get("restaurant");
  restaurantRef = firebase.database().ref("Restaurants").child(this.restaurant.key);


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    console.log(this.restaurant);
  }

  del(){
    this.restaurantRef.remove().then(()=>{
      this.presentToast("Restaurant Removed");
      this.close();
    })
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position :"bottom",
      showCloseButton: false,
    });
    toast.present();
  }
  close(){
    this.viewCtrl.dismiss();
  }
  capsName(rName){
    this.rName = rName.toUpperCase();
  }

}
