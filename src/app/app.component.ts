import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { RestAdminsPage } from '../pages/Restaurant Admins/rest-admins/rest-admins';
import { ViewRestaurantsPage } from '../pages/Restaurants/view-restaurants/view-restaurants';
import { HomePage } from '../pages/Utility/home/home';
import { ViewMenuPage } from '../pages/Menus/view-menu/view-menu';
import { UsersPage } from '../pages/Users/users/users';
import { NotificationMainPage } from '../pages/Notifications/notification-main/notification-main';
import { AddRestaurantPage } from '../pages/Restaurants/add-restaurant/add-restaurant';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = RestAdminsPage;

  activePage: any;
  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform,) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Restaurants', component: ViewRestaurantsPage, icon: "md-pizza" },
      { title: 'Restaurant Admins', component: RestAdminsPage, icon: "ios-contact" },
      { title: 'Menus', component: ViewMenuPage, icon: "md-paper" },
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
