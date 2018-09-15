import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { PartnerAdminViewPage } from '../../../Partners/partner-admin-view/partner-admin-view';




@IonicPage()
@Component({
  selector: 'page-restaurant-details',
  templateUrl: 'restaurant-details.html',
})
export class RestaurantDetailsPage {

  AdminUid = firebase.auth().currentUser.uid;
  valid : boolean = false;
  adminRef = firebase.database().ref("WalkIn Admin Data/Admins").child(this.AdminUid);


  public restaurant = this.navParams.get("restaurant");
  public adminEmail : string;
  public adminPass : string;
  
  partner : Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl : ToastController,
    public modalCtrl : ModalController,
    public alertCtrl : AlertController,
    public viewCtrl : ViewController,
    ) {
      this.getpartner();
      this.getAdminDetails();
    }
  
  getpartner(){
    firebase.database().ref("Partners").child(this.restaurant.AdminId).once('value',itemSnap=>{
      let temp = itemSnap.val();
      temp.key = itemSnap.key;
      this.partner = temp;
    })

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

    viewPartner(){
      let storeView = this.modalCtrl.create(PartnerAdminViewPage,{partner : this.partner},{enableBackdropDismiss : false});
      storeView.present();
  
    }
  
}
