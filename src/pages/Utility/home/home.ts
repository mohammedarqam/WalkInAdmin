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
  users : number = 0;

  partnersRef =this.db.list('Partners');
  restaurantsRef = this.db.list("Restaurant Data/Restaurants");
  usersRef = this.db.list("User Data/Users");
  bannersRef = this.db.list("Extra Data/Banners");
  foodCats = this.db.list("Restaurant Data/Food Categories");

  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);

    this.partnersRef.snapshotChanges().subscribe(snap=>{
      this.partners = snap.length;
    })

    this.usersRef.snapshotChanges().subscribe(snap=>{
      this.users = snap.length;
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
