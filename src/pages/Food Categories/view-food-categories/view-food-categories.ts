import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddFoodCategoriesPage } from '../add-food-categories/add-food-categories';


@IonicPage()
@Component({
  selector: 'page-view-food-categories',
  templateUrl: 'view-food-categories.html',
})
export class ViewFoodCategoriesPage {

  catsRef: AngularFireList<any>;
  cats: Observable<any[]>;


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.catsRef =db.list('Food Categories');

    this.cats = this.catsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  
  }


  gtAddCategory(){
    let catsAdd = this.modalCtrl.create(AddFoodCategoriesPage,null,{enableBackdropDismiss : false});
    catsAdd.present();
  }



}
