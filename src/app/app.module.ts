import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/Utility/home/home';
import { LoginPage } from '../pages/Utility/login/login';
import { AddRestaurantPage } from '../pages/Restaurants/add-restaurant/add-restaurant';
import { ViewRestaurantsPage } from '../pages/Restaurants/view-restaurants/view-restaurants';
import { EditRestaurantPage } from '../pages/Restaurants/edit-restaurant/edit-restaurant';
import { RestaurantDetailsPage } from '../pages/Restaurants/restaurant-details/restaurant-details';
import { RestAdminAddPage } from '../pages/Restaurant Admins/rest-admin-add/rest-admin-add';
import { RestAdminsPage } from '../pages/Restaurant Admins/rest-admins/rest-admins';
import { AddItemPage } from '../pages/Menus/add-item/add-item';
import { ViewMenuPage } from '../pages/Menus/view-menu/view-menu';
import { UsersPage } from '../pages/Users/users/users';
import { ViewCartPage } from '../pages/Users/view-cart/view-cart';
import { UserRestaurantsPage } from '../pages/Users/user-restaurants/user-restaurants';
import { UserAddNotificationsPage } from '../pages/Notifications/User/user-add-notifications/user-add-notifications';
import { UserViewNotificationsPage } from '../pages/Notifications/User/user-view-notifications/user-view-notifications';
import { VendorAddNotificationsPage } from '../pages/Notifications/Vendor/vendor-add-notifications/vendor-add-notifications';
import { VendorViewNotificationsPage } from '../pages/Notifications/Vendor/vendor-view-notifications/vendor-view-notifications';
import { NotificationMainPage } from '../pages/Notifications/notification-main/notification-main';


export const firebaseConfig = {
  apiKey: "AIzaSyAE8aWWXXnIemdrHUPA7e93GqA5hNEK1SU",
  authDomain: "walkin-app-codebro.firebaseapp.com",
  databaseURL: "https://walkin-app-codebro.firebaseio.com",
  projectId: "walkin-app-codebro",
  storageBucket: "walkin-app-codebro.appspot.com",
  messagingSenderId: "1066189513591"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddRestaurantPage,
    ViewRestaurantsPage,
    EditRestaurantPage,
    RestaurantDetailsPage,
    RestAdminAddPage,
    RestAdminsPage,
    AddItemPage,
    ViewMenuPage,
    UsersPage,
    ViewCartPage,
    UserRestaurantsPage,
    NotificationMainPage,
    UserAddNotificationsPage,
    UserViewNotificationsPage,
    VendorAddNotificationsPage,
    VendorViewNotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddRestaurantPage,
    ViewRestaurantsPage,
    EditRestaurantPage,
    RestaurantDetailsPage,
    RestAdminAddPage,
    RestAdminsPage,
    AddItemPage,
    ViewMenuPage,
    UsersPage,
    ViewCartPage,
    UserRestaurantsPage,
    NotificationMainPage,
    UserAddNotificationsPage,
    UserViewNotificationsPage,
    VendorAddNotificationsPage,
    VendorViewNotificationsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
