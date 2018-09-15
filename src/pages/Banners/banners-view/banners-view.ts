import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddBannersPage } from '../add-banners/add-banners';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-banners-view',
  templateUrl: 'banners-view.html',
})
export class BannersViewPage {

  bannersRef: AngularFireList<any>;
  banners: Observable<any[]>;
  bannerRef = firebase.database().ref("Extra Data/Banners");


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public alertCtrl : AlertController,
  public toastCtrl : ToastController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.bannersRef =db.list('Extra Data/Banners', ref=>ref.orderByChild("View"));

    this.banners = this.bannersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  gtAddBanner(){
    let bannerAdd = this.modalCtrl.create(AddBannersPage,null,{enableBackdropDismiss : false});
    bannerAdd.present();
  }


  deleteBanner(banner) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Banner ?',
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
            this.delete(banner);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(banner) {

    firebase.storage().ref("Banners/").child(banner.Name).delete().then(() => {
      this.bannerRef.child(banner.key).remove().then(() => {
        this.presentToast('Banner Deleted');
      });
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
