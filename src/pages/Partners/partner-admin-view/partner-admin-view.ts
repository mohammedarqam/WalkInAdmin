import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-partner-admin-view',
  templateUrl: 'partner-admin-view.html',
})
export class PartnerAdminViewPage {

  AdminUid = firebase.auth().currentUser.uid;

  adminRef = firebase.database().ref("WalkInAdmin").child(this.AdminUid);

  public partner = this.navParams.get("partner");
  public adminEmail : string;
  public adminPass : string;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public viewCtrl : ViewController,
  ) {
  }

  getAdminDetails(){
    this.adminRef.once('value',itemSnap=>{
      this.adminEmail = itemSnap.val().Email;
      this.adminPass = itemSnap.val().Password;
    })   
    }


    close(){
      this.viewCtrl.dismiss();
    }
  
  }
