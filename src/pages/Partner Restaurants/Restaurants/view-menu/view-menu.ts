import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { MenuAnalysisPage } from '../menu-analysis/menu-analysis';

@IonicPage()
@Component({
  selector: 'page-view-menu',
  templateUrl: 'view-menu.html',
})
export class ViewMenuPage {


  name :string;
  price : number;
  type : string;
  
  restaurant = this.navParams.get("restaurant");

  menuRef: AngularFireList<any>;
  items: Observable<any[]>;

  catRef: AngularFireList<any>;
  cats: Observable<any[]>;


  constructor(
  public navCtrl: NavController, 
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.menuRef =db.list(`Restaurant Data/Menus/${this.restaurant.key}`, ref=>ref.orderByChild("Ordered"));

    this.items = this.menuRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.catRef =db.list(`Restaurant Data/Food Categories`);

    this.cats = this.catRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );


  }

  checkData(){
    if(this.name){
      if(this.price){
        if(this.type){
          this.addItem();
        }else{
          this.presentToast("Type not provided")
        }
      }else{
        this.presentToast("Price not provided")
      }
    }else{
      this.presentToast("Name not provided")
    }
  }

addItem(){
  firebase.database().ref("Restaurant Data/Menus").child(this.restaurant.key).push({
    ItemName : this.name,
    Price : this.price,
    Type : this.type,
    Ordered : 0,
  }).then(()=>{
    this.name = null;
    this.price = null;
    this.type = null;
    this.presentToast("Item Added")
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
  viewAnalysis(){
    this.navCtrl.push(MenuAnalysisPage,{key : this.restaurant.key} )
  }
}