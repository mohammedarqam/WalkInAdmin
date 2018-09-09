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
  playzones : number = 0;

  partnersRef = firebase.database().ref("PartnerAdmins");
  restaurantsRef = firebase.database().ref("Restaurants");
  playzonesRef = firebase.database().ref("PlayZones");

  constructor(
  public navCtrl: NavController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
    this.getPartners();
    this.getRestaurants();
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

  getplayzones(){
    this.playzonesRef.on('value',item=>{
      this.playzones = item.numChildren();
    })
  }

}
