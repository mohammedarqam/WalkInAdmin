import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorViewNotificationsPage } from '../Vendor/vendor-view-notifications/vendor-view-notifications';
import { UserViewNotificationsPage } from '../User/user-view-notifications/user-view-notifications';


@IonicPage()
@Component({
  selector: 'page-notification-main',
  templateUrl: 'notification-main.html',
})
export class NotificationMainPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }

  userNoti(){
    this.navCtrl.push(UserViewNotificationsPage)
  }
  vendorNoti(){
    this.navCtrl.push(VendorViewNotificationsPage)
  }

}
