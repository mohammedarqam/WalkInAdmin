import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { UserRestaurantsPage } from '../user-restaurants/user-restaurants';
import { ViewCartPage } from '../view-cart/view-cart';
import { UserDetailsPage } from '../user-details/user-details';
import { UserBalancesPage } from '../user-balances/user-balances';


@IonicPage()
@Component({
  selector: 'page-user-options',
  templateUrl: 'user-options.html',
})
export class UserOptionsPage {

  user = this.navParams.get("user");

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    console.log(this.user);
  }

  viewRestaurant(){
    let partnerView = this.modalCtrl.create(UserRestaurantsPage,{user : this.user},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }

  viewCart(){
    let partnerView = this.modalCtrl.create(ViewCartPage,{user : this.user},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }

  viewBalances(){
    let partnerView = this.modalCtrl.create(UserBalancesPage,{user : this.user},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }

  viewDetails(){
    let partnerView = this.modalCtrl.create(UserDetailsPage,{user : this.user},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }
  close(){
    this.viewCtrl.dismiss();
  }

}
