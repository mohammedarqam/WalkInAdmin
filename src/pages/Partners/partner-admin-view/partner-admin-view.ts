import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-partner-admin-view',
  templateUrl: 'partner-admin-view.html',
})
export class PartnerAdminViewPage {

  AdminUid = firebase.auth().currentUser.uid;
  valid : boolean = false;
  adminRef = firebase.database().ref("WalkInAdmin").child(this.AdminUid);

  public partner = this.navParams.get("partner");
  public adminEmail : string;
  public adminPass : string;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public toastCtrl : ToastController,
  public alertCtrl : AlertController,
  public viewCtrl : ViewController,
  ) {
    this.getAdminDetails();
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
  
  }
