import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { PartnerAdminAddPage } from '../partner-admin-add/partner-admin-add';



@IonicPage()
@Component({
  selector: 'page-partner-admins',
  templateUrl: 'partner-admins.html',
})
export class PartnerAdminsPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  ionViewWillEnter(){

  }



  addAdmin(){
    this.navCtrl.push(PartnerAdminAddPage);
  }

}
