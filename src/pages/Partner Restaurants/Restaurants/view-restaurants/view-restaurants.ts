import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestOptionViewPage } from '../rest-option-view/rest-option-view';
import { ViewMenuPage } from '../view-menu/view-menu';

@IonicPage()
@Component({
  selector: 'page-view-restaurants',
  templateUrl: 'view-restaurants.html',
})
export class ViewRestaurantsPage {


  restaurantsRef = this.db.list('Restaurants', ref=>ref.orderByChild("TimeStamp"));
  restaurants: Array<any> = [];
  restaurantsLoaded: Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public popoverCtrl: PopoverController,
  public db : AngularFireDatabase,
  public navParams: NavParams) {
    this.getRestaurants();
  }



  getRestaurants(){
    this.restaurantsRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
        console.log(temp);
      })
      this.restaurants = tempArray;
      this.restaurantsLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.restaurants = this.restaurantsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.restaurants = this.restaurants.filter((v) => {
      if((v.RestaurantName || v.ProfitToLoyalPercentage || v.RestaurantEmail) && q) {
        if (
          (v.RestaurantName.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.ProfitToLoyalPercentage.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.RestaurantEmail.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ) {
          return true;
        }
        return false;
      }
    });
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

viewMenu(r){
  this.navCtrl.push(ViewMenuPage,{restaurant : r});
}

viewUsers(r){
  // this.navCtrl.push(ViewMenuPage,{restaurant : r});
}

}
