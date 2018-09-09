import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestOptionViewPage } from '../rest-option-view/rest-option-view';

@IonicPage()
@Component({
  selector: 'page-view-restaurants',
  templateUrl: 'view-restaurants.html',
})
export class ViewRestaurantsPage {


  restaurantsRef: AngularFireList<any>;
  restaurants: Observable<any[]>;

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public viewCtrl : ViewController,
  public popoverCtrl: PopoverController,
  public db : AngularFireDatabase,
  public navParams: NavParams) {
    this.restaurantsRef =db.list('Restaurants', ref=>ref.orderByChild("TimeStamp"));

    this.restaurants = this.restaurantsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addRestaurant(){
    let partnerAdd = this.modalCtrl.create(AddRestaurantPage,null,{enableBackdropDismiss : false});
    partnerAdd.present();
  }

  viewOptions(myEvent,r){
    let popover = this.popoverCtrl.create(RestOptionViewPage,{restaurant : r});
    popover.present({
      ev: myEvent
    });
}



close(){
  this.viewCtrl.dismiss();
}

}
