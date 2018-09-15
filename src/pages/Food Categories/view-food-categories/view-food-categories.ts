import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddFoodCategoriesPage } from '../add-food-categories/add-food-categories';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-view-food-categories',
  templateUrl: 'view-food-categories.html',
})
export class ViewFoodCategoriesPage {

  catsRef =this.db.list('Restaurant Data/Food Categories');
  cats: Array<any> = [];
  catsLoaded: Array<any> = [];



  CatRef = firebase.database().ref("Restaurant Data/Food Categories");

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.getCats();
  }

  getCats(){
    this.catsRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.cats = tempArray;
      this.catsLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.cats = this.catsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.cats = this.cats.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddCategory(){
    let catsAdd = this.modalCtrl.create(AddFoodCategoriesPage,null,{enableBackdropDismiss : false});
    catsAdd.present();
  }


  deleteCat(cat) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Category ?',
      message: 'This banner cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(cat);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(banner) {

      this.CatRef.child(banner.key).remove().then(() => {
        this.presentToast('Category Deleted');
      });
 }

 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  });
  toast.present();
}



}
