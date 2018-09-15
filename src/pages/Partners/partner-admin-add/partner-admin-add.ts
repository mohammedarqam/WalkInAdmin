import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';
import { PartnerAdminsPage } from '../partner-admins/partner-admins';

@IonicPage()
@Component({
  selector: 'page-partner-admin-add',
  templateUrl: 'partner-admin-add.html',
})
export class PartnerAdminAddPage {

  AdminUid = firebase.auth().currentUser.uid;

  Name : string;
  Contact : string;
  Email : string;
  Password : string = this.generatePassword();
  ExtraDetails : string="";

  adminRef = firebase.database().ref("WalkIn Admin Data/Admins").child(this.AdminUid);
  partnerRef = firebase.database().ref("Partners");

  adminEmail : string;
  adminPass : string;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public viewCtrl : ViewController,
  ) {
  }

  ionViewDidEnter(){
    this.getAdminDetails();
  }
  
  getAdminDetails(){
  this.adminRef.once('value',itemSnap=>{
    this.adminEmail = itemSnap.val().Email;
    this.adminPass = itemSnap.val().Password;
  })
  
  }


  addPartner(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    firebase.auth().createUserWithEmailAndPassword(this.Email,this.Password).catch((e)=>{
      let message = e.message;
      this.presentToast(message);
    }).then(()=>{
      this.partnerRef.child(firebase.auth().currentUser.uid).set({
        Name : this.Name,
        Phone : this.Contact,
        Email : this.Email,
        Password : this.Password,
        ExtraDetails : this.ExtraDetails,
        TimeStamp : moment().format()
      }).then(()=>{
        firebase.auth().signOut().then(()=>{
          firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).then(()=>{
            this.presentToast("Partner Added");
            this.close();
            loading.dismiss();
          })
        })
      })
    })
  }


  generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}



  checkData(){
    if(this.Name){
      if(this.Contact.length===10){
        if(this.Email){
          this.addPartner();
        }else{
          this.presentToast("Enter Email");
        }
      }else{
        this.presentToast("Phone Number Invalid")
      }
    }else{
      this.presentToast("Enter Name");
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position :"top",
      showCloseButton: false,
    });
    toast.present();
  }
  capsName(Name){
    this.Name = Name.toUpperCase();
  }

}
