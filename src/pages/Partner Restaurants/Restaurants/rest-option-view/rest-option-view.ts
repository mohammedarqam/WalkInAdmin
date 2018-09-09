import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { RestaurantDetailsPage } from '../restaurant-details/restaurant-details';
import { EditRestaurantPage } from '../edit-restaurant/edit-restaurant';
import { DelRestaurantPage } from '../del-restaurant/del-restaurant';



@IonicPage()
@Component({
  selector: 'page-rest-option-view',
  templateUrl: 'rest-option-view.html',
})
export class RestOptionViewPage {

  restaurant = this.navParams.get("restaurant");

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public viewCtrl : ViewController,
  public navParams: NavParams
  ) {
  }

  view(){
    let partnerView = this.modalCtrl.create(RestaurantDetailsPage,{restaurant : this.restaurant},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }
  edit(){
    let partnerEdit = this.modalCtrl.create(EditRestaurantPage,{restaurant : this.restaurant},{enableBackdropDismiss : false});
    partnerEdit.present();
    this.close();
  }
  delete(){
    let partnerDelete = this.modalCtrl.create(DelRestaurantPage,{restaurant : this.restaurant},{enableBackdropDismiss : false});
    partnerDelete.present();
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
