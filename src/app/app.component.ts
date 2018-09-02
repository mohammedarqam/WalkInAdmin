import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/Utility/home/home';
import { UsersPage } from '../pages/Users/users/users';
import { PartnerAdminsPage } from '../pages/Partners/partner-admins/partner-admins';
import { ViewRestaurantsPage } from '../pages/Partner Restaurants/Restaurants/view-restaurants/view-restaurants';
import { ViewMenuPage } from '../pages/Partner Restaurants/Menus/view-menu/view-menu';
import { NotificationMainPage } from '../pages/Utility/Notifications/notification-main/notification-main';
import { ViewPlayZonePage } from '../pages/Partner Playzones/PlayZones/view-play-zone/view-play-zone';
import { ViewGamesPage } from '../pages/Partner Playzones/Game Menus/view-games/view-games';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = PartnerAdminsPage;

  activePage: any;
  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform,) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Walk In Partners', component: PartnerAdminsPage, icon: "ios-contact" },

      { title: 'Restaurants', component: ViewRestaurantsPage, icon: "md-pizza" },
      { title: 'Restaurant Menus', component: ViewMenuPage, icon: "md-paper" },

      { title: 'Play Zones', component: ViewPlayZonePage, icon: "logo-steam" },
      { title: 'Play Zone Games', component: ViewGamesPage, icon: "md-game-controller-b" },

      { title: 'Users', component: UsersPage, icon: "ios-people" },
      { title: 'Notifications', component: NotificationMainPage, icon: "ios-mail" },
    ];
    this.activePage = this.pages[2];
  }

  initializeApp() {
    this.platform.ready().then(() => {
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
/*    firebase.auth().signOut().then(() => {
      this.nav.setRoot(MainLoginPage);
    }).catch((error) => {
      console.log(error.message);
    });
  */
 this.nav.setRoot("LoginPage");
 
}

}
