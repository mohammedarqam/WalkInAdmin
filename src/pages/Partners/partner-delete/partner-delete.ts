import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-partner-delete',
  templateUrl: 'partner-delete.html',
})
export class PartnerDeletePage {

  pName : string;
  partner = this.navParams.get("partner");
  partnerRef = firebase.database().ref("Partners").child(this.partner.key);


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
  }

  del(){
    this.partnerRef.remove().then(()=>{
      this.presentToast("Partner Removed");
      this.close();
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
  close(){
    this.viewCtrl.dismiss();
  }
  capsName(pName){
    this.pName = pName.toUpperCase();
  }

}
