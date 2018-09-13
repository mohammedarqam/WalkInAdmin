import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';

import { AngularFireDatabase} from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  partners : number = 0;
  restaurants : number = 0;
  banners : number = 0;
  fCats : number = 0;

  partnersRef =this.db.list('PartnerAdmins');
  restaurantsRef = this.db.list("Restaurants");
  bannersRef = this.db.list("Banners");
  foodCats = this.db.list("Food Categories");

  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);

    this.partnersRef.snapshotChanges().subscribe(snap=>{
      this.partners = snap.length;
    })

    this.restaurantsRef.snapshotChanges().subscribe(snap=>{
      this.restaurants = snap.length;
    })

    this.bannersRef.snapshotChanges().subscribe(snap=>{
      this.banners = snap.length;
    })

    this.foodCats.snapshotChanges().subscribe(snap=>{
      this.fCats = snap.length;
    })

  }
}
