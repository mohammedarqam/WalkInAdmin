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
import { FaqsViewPage } from '../pages/Utility/faqs-view/faqs-view';
import { BannersViewPage } from '../pages/Banners/banners-view/banners-view';
import { AddBannersPage } from '../pages/Banners/add-banners/add-banners';
import { ViewFoodCategoriesPage } from '../pages/Food Categories/view-food-categories/view-food-categories';
import { AddFoodCategoriesPage } from '../pages/Food Categories/add-food-categories/add-food-categories';
import { PackagesPage } from '../pages/Packages/packages/packages';
import { AddPackagesPage } from '../pages/Packages/add-packages/add-packages';
import { UserOptionsPage } from '../pages/Users/user-options/user-options';
import { UserBalancesPage } from '../pages/Users/user-balances/user-balances';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';

  export const firebaseCred = {
    apiKey: "AIzaSyBrOwk3PvUtFXM_wxAW-OQ7leXTlDeLSkk",
    authDomain: "walkin-2215d.firebaseapp.com",
    databaseURL: "https://walkin-2215d.firebaseio.com",
    projectId: "walkin-2215d",
    storageBucket: "walkin-2215d.appspot.com",
    messagingSenderId: "946109608266"
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
    FaqsViewPage,
    BannersViewPage,
    AddBannersPage,
    ViewFoodCategoriesPage,
    AddFoodCategoriesPage,
    PackagesPage,
    AddPackagesPage,
    UserOptionsPage,
    UserBalancesPage,
    UserDetailsPage,
    
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
    FaqsViewPage,
    BannersViewPage,
    AddBannersPage,
    ViewFoodCategoriesPage,
    AddFoodCategoriesPage,
    PackagesPage,
    AddPackagesPage,
    UserOptionsPage,
    UserBalancesPage,
    UserDetailsPage,
    
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
