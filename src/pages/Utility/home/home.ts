import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';
import {CountoModule} from 'angular2-counto';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  partners : number = 0;
  restaurants : number = 0;
  banners : number = 0;

  partnersRef = firebase.database().ref("PartnerAdmins");
  restaurantsRef = firebase.database().ref("Restaurants");
  bannersRef = firebase.database().ref("Banners");

  constructor(
  public navCtrl: NavController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
    this.getPartners();
    this.getRestaurants();
    this.getBanners();
  }



  getPartners(){
    this.partnersRef.on('value',item=>{
      this.partners = item.numChildren();
    })
  }

  getRestaurants(){
    this.restaurantsRef.on('value',item=>{
      this.restaurants = item.numChildren();
    })
  }

  getBanners(){
    this.bannersRef.on('value',item=>{
      this.banners = item.numChildren();
    })
  }

}
