import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-partner-admin-edit',
  templateUrl: 'partner-admin-edit.html',
})
export class PartnerAdminEditPage {

  partner = this.navParams.get("partner");

  AdminUid = firebase.auth().currentUser.uid;

  Name : string = this.partner.Name ;
  Contact : string= this.partner.Phone;
  Email : string= this.partner.Email;
  Password : string = this.partner.Password;
  ExtraDetails : string= this.partner.ExtraDetails;

  adminRef = firebase.database().ref("WalkIn Admin Data/Admins").child(this.AdminUid);
  partnerRef = firebase.database().ref("Partners").child(this.partner.key);

  public adminEmail : string;
  public adminPass : string;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public menuCtrl : MenuController,
  public viewCtrl : ViewController,
  ) {
    this.menuCtrl.enable(true);
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
  



  checkData(){
    if(this.Name===this.partner.Name){
      
    }else{
      this.ChangeName();
    }
  
    if(this.Email===this.partner.Email){
      
    }else{
      this.ChangeEmail();
    }
    if(this.Password===this.partner.Password){
      
    }else{
      this.ChangePass();
    }
    if(this.Contact===this.partner.Phone){
      
    }else{
      this.ChangePhone();
    }
    if(this.ExtraDetails===this.partner.ExtraDetails){

    }else{
      this.ChangeExtrDetails();
    }
  
  
  }

  ChangeName(){
    if(this.Name){
    this.partnerRef.child("Name").set(this.Name);
    this.presentToast("Name Changed");
    }else{
      this.presentToast("Partner Name Empty")
    }
  }
  ChangePhone(){
    if(this.Contact.length!=10){
      this.presentToast("Partner Phone Number not Valid");
    }else{
      this.partnerRef.child("Phone").set(this.Contact);
      this.presentToast("Partner Phone Number Changed");
      }
  }


  ChangeEmail(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    if(this.Email){
    firebase.auth().signOut().then(()=>{
      firebase.auth().signInWithEmailAndPassword(this.partner.Email,this.partner.Password).then(()=>{
        firebase.auth().currentUser.updateEmail(this.Email).then(()=>{
          this.partnerRef.child("Email").set(this.Email);
          firebase.auth().signOut().then(()=>{
            firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).catch((e)=>{
              let err = e.message;
              this.presentToast(err);
              loading.dismiss();
            }).then(()=>{
              this.presentToast("Partner Email Changed");
              loading.dismiss();
            })
          })
        })
      })
    })
  }else{
    this.presentToast("No Email Provided");
    loading.dismiss();
  }
}




  ChangePass(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    if(this.Password){
        firebase.auth().signOut().then(()=>{
          firebase.auth().signInWithEmailAndPassword(this.partner.Email,this.partner.Password).then(()=>{
            firebase.auth().currentUser.updatePassword(this.Password).catch((e)=>{
              let err = e.message;
              this.presentToast(err);
              loading.dismiss();
            }).then(()=>{
              this.partnerRef.child("Password").set(this.Password).then(()=>{
                firebase.auth().signOut().then(()=>{
                  firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).then(()=>{
                    this.presentToast("Partner Password Updated");
                    loading.dismiss();
                  })
                })
              })
            })
          })
        })



    }else{
      this.presentToast("Password not provided");
      loading.dismiss()
    }



  }


  ChangeExtrDetails(){
    if(this.ExtraDetails){
      this.partnerRef.child("ExtraDetails").set(this.ExtraDetails).then(()=>{
        this.presentToast("Extra Details Updated");
      })
    }else{
      this.presentToast("Extra Details Empty");
    }
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
  capsName(Name){
    this.Name = Name.toUpperCase();
  }
}