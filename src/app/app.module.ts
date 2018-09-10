import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/Utility/home/home';
import { LoginPage } from '../pages/Utility/login/login';
import { NotificationMainPage } from '../pages/Utility/Notifications/notification-main/notification-main';
import { UserViewNotificationsPage } from '../pages/Utility/Notifications/User/user-view-notifications/user-view-notifications';
import { VendorViewNotificationsPage } from '../pages/Utility/Notifications/Vendor/vendor-view-notifications/vendor-view-notifications';
import { UserRestaurantsPage } from '../pages/Users/user-restaurants/user-restaurants';
import { UsersPage } from '../pages/Users/users/users';
import { ViewCartPage } from '../pages/Users/view-cart/view-cart';
import { PartnerAdminAddPage } from '../pages/Partners/partner-admin-add/partner-admin-add';
import { PartnerAdminEditPage } from '../pages/Partners/partner-admin-edit/partner-admin-edit';
import { PartnerAdminsPage } from '../pages/Partners/partner-admins/partner-admins';
import { AddRestaurantPage } from '../pages/Partner Restaurants/Restaurants/add-restaurant/add-restaurant';
import { EditRestaurantPage } from '../pages/Partner Restaurants/Restaurants/edit-restaurant/edit-restaurant';
import { RestaurantDetailsPage } from '../pages/Partner Restaurants/Restaurants/restaurant-details/restaurant-details';
import { ViewRestaurantsPage } from '../pages/Partner Restaurants/Restaurants/view-restaurants/view-restaurants';
import { AddGamesPage } from '../pages/Partner Playzones/Game Menus/add-games/add-games';
import { ViewGamesPage } from '../pages/Partner Playzones/Game Menus/view-games/view-games';
import { AddPlayZonePage } from '../pages/Partner Playzones/PlayZones/add-play-zone/add-play-zone';
import { EditPlayZonePage } from '../pages/Partner Playzones/PlayZones/edit-play-zone/edit-play-zone';
import { PlayZoneDetailsPage } from '../pages/Partner Playzones/PlayZones/play-zone-details/play-zone-details';
import { ViewPlayZonePage } from '../pages/Partner Playzones/PlayZones/view-play-zone/view-play-zone';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { PartnerAdminOptionsPage } from '../pages/Partners/partner-admin-options/partner-admin-options';
import { PartnerAdminViewPage } from '../pages/Partners/partner-admin-view/partner-admin-view';
import { PartnerDeletePage } from '../pages/Partners/partner-delete/partner-delete';
import { CountoModule }  from 'angular2-counto';
import { DelRestaurantPage } from '../pages/Partner Restaurants/Restaurants/del-restaurant/del-restaurant';
import { RestOptionViewPage } from '../pages/Partner Restaurants/Restaurants/rest-option-view/rest-option-view';
import { PlayZoneOptionsPage } from '../pages/Partner Playzones/PlayZones/play-zone-options/play-zone-options';
import { DelplayzonePage } from '../pages/Partner Playzones/PlayZones/delplayzone/delplayzone';
import { ViewMenuPage } from '../pages/Partner Restaurants/Restaurants/view-menu/view-menu';
import { MenuAnalysisPage } from '../pages/Partner Restaurants/Restaurants/menu-analysis/menu-analysis';

  export const firebaseCred = {
  apiKey: "AIzaSyAE8aWWXXnIemdrHUPA7e93GqA5hNEK1SU",
  authDomain: "walkin-app-codebro.firebaseapp.com",
  databaseURL: "https://walkin-app-codebro.firebaseio.com",
  projectId: "walkin-app-codebro",
  storageBucket: "walkin-app-codebro.appspot.com",
  messagingSenderId: "1066189513591"
  };
  firebase.initializeApp(firebaseCred);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationMainPage,
    UserViewNotificationsPage,
    VendorViewNotificationsPage,
    UserRestaurantsPage,
    UsersPage,
    ViewCartPage,
    PartnerAdminAddPage,
    PartnerAdminEditPage,
    PartnerAdminsPage,
    ViewMenuPage,
    AddRestaurantPage,
    EditRestaurantPage,
    RestaurantDetailsPage,
    ViewRestaurantsPage,
    AddGamesPage,
    ViewGamesPage,
    AddPlayZonePage,
    EditPlayZonePage,
    PlayZoneDetailsPage,
    ViewPlayZonePage,
    PartnerAdminOptionsPage,
    PartnerAdminViewPage,
    PartnerDeletePage,
    DelRestaurantPage,
    RestOptionViewPage,
    PlayZoneOptionsPage,
    DelplayzonePage,
    MenuAnalysisPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CountoModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NotificationMainPage,
    UserViewNotificationsPage,
    VendorViewNotificationsPage,
    UserRestaurantsPage,
    UsersPage,
    ViewCartPage,
    PartnerAdminAddPage,
    PartnerAdminEditPage,
    PartnerAdminsPage,
    ViewMenuPage,
    AddRestaurantPage,
    EditRestaurantPage,
    RestaurantDetailsPage,
    ViewRestaurantsPage,
    AddGamesPage,
    ViewGamesPage,
    AddPlayZonePage,
    EditPlayZonePage,
    PlayZoneDetailsPage,
    ViewPlayZonePage,
    PartnerAdminOptionsPage,
    PartnerAdminViewPage,
    PartnerDeletePage,
    DelRestaurantPage,
    RestOptionViewPage,
    PlayZoneOptionsPage,
    DelplayzonePage,
    MenuAnalysisPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
