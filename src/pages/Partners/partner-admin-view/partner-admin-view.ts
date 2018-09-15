import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { RestaurantDetailsPage } from '../../Partner Restaurants/Restaurants/restaurant-details/restaurant-details';

@IonicPage()
@Component({
  selector: 'page-partner-admin-view',
  templateUrl: 'partner-admin-view.html',
})
export class PartnerAdminViewPage {

  AdminUid = firebase.auth().currentUser.uid;
  valid : boolean = false;
  adminRef = firebase.database().ref("WalkIn Admin Data/Admins").child(this.AdminUid);

  public partner = this.navParams.get("partner");
  public adminEmail : string;
  public adminPass : string;

  stores : Array<any> = [];

  partnerRef = firebase.database().ref("Partners").child(this.partner.key);

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public toastCtrl : ToastController,
  public modalCtrl : ModalController,
  public alertCtrl : AlertController,
  public viewCtrl : ViewController,
  ) {
    this.getStores();
    this.getAdminDetails();
  }

  getStores(){

    this.partnerRef.child("Stores").once('value',itemSnapshot=>{
      this.stores = [];
      itemSnapshot.forEach(itemSnap =>{
        firebase.database().ref("Restaurant Data/Restaurants").child(itemSnap.key).once('value',item=>{
          this.stores.push(item.val());
        })
        return false;
      }) ;
    });
  
  }



  getAdminDetails(){
    this.adminRef.once('value',itemSnap=>{
      this.adminEmail = itemSnap.val().Email;
      this.adminPass = itemSnap.val().Password;
    })   
    }

    viewPass() {
      let alert = this.alertCtrl.create({
        title: 'Enter Admin password',
        subTitle: this.adminEmail,
        inputs: [
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Verify',
            handler: data => {
              console.log(this.adminPass);
              if(data.password==this.adminPass){
                this.valid = true;
                this.presentToast("Partner Password Revealed")
              }else{
                this.presentToast("Invalid password");
              }
            }
          }
        ]
      });
      alert.present();
    }

    hidePass(){
      this.valid = false;
    }

    close(){
      this.viewCtrl.dismiss();
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

    viewStore(store){

    let storeView = this.modalCtrl.create(RestaurantDetailsPage,{restaurant : store},{enableBackdropDismiss : false});
    storeView.present();
    
    }

  }
