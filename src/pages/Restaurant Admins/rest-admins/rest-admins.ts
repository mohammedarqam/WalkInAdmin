import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestAdminAddPage } from '../rest-admin-add/rest-admin-add';


@IonicPage()
@Component({
  selector: 'page-rest-admins',
  templateUrl: 'rest-admins.html',
})
export class RestAdminsPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams) {
  }



  addAdmin(){
    this.navCtrl.push(RestAdminAddPage);
  }
}
