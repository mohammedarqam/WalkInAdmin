import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-add-packages',
  templateUrl: 'add-packages.html',
})
export class AddPackagesPage {

  name : string;
  price : string;
  nop : string;
  typeOfPack : string;
  Prestaurant : string;
  PItems : Array<any> = [];
  ExtraItems :Array<any> = [];

  ei : string;
  pacakageRef = firebase.database().ref("Packages");

  restaurantsRef: AngularFireList<any>;
  restaurants: Observable<any[]>;

  menuRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams,
  public loadingCtrl : LoadingController,
  ) {
    this.restaurantsRef =db.list('Restaurants', ref=>ref.orderByChild("TimeStamp"));

    this.restaurants = this.restaurantsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  checkData(){
    if(this.name){
      if(this.price){
        if(this.nop){
          if(this.typeOfPack){
            if(this.Prestaurant){
              if(this.PItems){
                this.addPackage();
              }else{this.presentToast("Select Items");}
            }else{this.presentToast("No Restaurant Selected");}
          }else{this.presentToast("Select a type of Package");}
        }else{this.presentToast("How many people ?");}
      }else{this.presentToast("Enter a Package Price");}
    }else{  
      this.presentToast("Provide a Package Name")
    }
  }




  getMenu(){
    this.menuRef =this.db.list(`Menus/${this.Prestaurant}`, ref=>ref.orderByChild("Ordered"));

    this.items = this.menuRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }


  addPackage(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    
    
    this.pacakageRef.push({
      Name : this.name,
      Price : this.price,
      NoOfPeople : this.nop,
      Type : this.typeOfPack,
      Restaurant : this.Prestaurant,
      Items : this.PItems,
      ExtraItems : this.ExtraItems,
      TimeStamp : moment().format(),
      Ordered : "0"
    }).then((snap)=>{
      firebase.database().ref("Restaurant Packages").child(this.Prestaurant).child(snap.key).set(true);
      firebase.database().ref("Number Of People Package").child(this.nop).child(snap.key).set(true);
      firebase.database().ref("TypeOfPackage").child(this.typeOfPack).child(snap.key).set(true);
    }).then(()=>{
      loading.dismiss();
      this.presentToast("Package Added");
      this.close();
    })
  }


  close(){
    this.viewCtrl.dismiss();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position :"bottom",
      showCloseButton : true
      
    });
    toast.present();
  }
  atEI(){
    if(this.ei){
    this.ExtraItems.push(this.ei);
    this.ei = null;
    }else{
      this.presentToast("Enter an Extra Item");
    }
  }  

  rmEI(i){
    this.ExtraItems.splice(i,1);
  }
}
