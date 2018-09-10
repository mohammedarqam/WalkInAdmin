import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { HomePage } from '../pages/Utility/home/home';
import { UsersPage } from '../pages/Users/users/users';
import { PartnerAdminsPage } from '../pages/Partners/partner-admins/partner-admins';
import { ViewRestaurantsPage } from '../pages/Partner Restaurants/Restaurants/view-restaurants/view-restaurants';
import { NotificationMainPage } from '../pages/Utility/Notifications/notification-main/notification-main';
import { LoginPage } from '../pages/Utility/login/login';
import * as firebase from 'firebase';
import { ViewMenuPage } from '../pages/Partner Restaurants/Restaurants/view-menu/view-menu';
import { VendorViewNotificationsPage } from '../pages/Utility/Notifications/Vendor/vendor-view-notifications/vendor-view-notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any ;

  activePage: any;
  pages: Array<{ title: string, component: any, icon: any, color : string }>;

  constructor(
  public platform: Platform,    
  public toastCtrl: ToastController,
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'DashBoard', component: HomePage, icon: "flash",color: "yellowi" },
      { title: 'Walk In Partners', component: PartnerAdminsPage, icon: "ios-contact" ,color: "whiter"},

      { title: 'Restaurants', component: ViewRestaurantsPage, icon: "md-pizza",color: "whiter" },

      // { title: 'Play Zones', component: ViewPlayZonePage, icon: "logo-steam",color: "whiter" },
      // { title: 'Play Zone Games', component: ViewGamesPage, icon: "md-game-controller-b",color: "whiter" },

      { title: 'Users', component: UsersPage, icon: "ios-people",color: "whiter" },
      { title: 'Notifications', component: NotificationMainPage, icon: "ios-mail",color: "whiter" },
    ];
    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("WalkInAdmin").once('value',itemSnapshot=>{
          itemSnapshot.forEach(itemSnap => {
            if(itemSnap.exists()){
              var welMsg = "Welcome"+" "+itemSnap.val().Name;
              this.rootPage = HomePage;
              
              this.presentToast(welMsg);
            }
      });
    });
      }
      else{
        this.rootPage = LoginPage;
      }
    });  
  
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.nav.setRoot(LoginPage);
      this.presentToast("Signed Out");
    }).catch((error) => {
      console.log(error.message);
    });

 
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position : "top",
    showCloseButton: false,
  });
  toast.present();
}

}
