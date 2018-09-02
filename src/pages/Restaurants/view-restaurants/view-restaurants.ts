import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-view-restaurants',
  templateUrl: 'view-restaurants.html',
})
export class ViewRestaurantsPage {

  restaurants: Observable<any>;
  searchBar : string


  constructor(
  public navCtrl: NavController, 
  public afDatabase: AngularFireDatabase,
  public navParams: NavParams) {

  this.restaurants = afDatabase.list<any>('Restaurants/',ref=>ref.orderByChild('Time'))
  .snapshotChanges()
  .map(
  changes => {
    return changes.map(c => ({
      key: c.payload.key, ...c.payload.val()
    }))
  });


}




}
