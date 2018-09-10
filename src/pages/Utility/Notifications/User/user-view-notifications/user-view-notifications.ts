import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import moment from  'moment';




@IonicPage()
@Component({
  selector: 'page-user-view-notifications',
  templateUrl: 'user-view-notifications.html',
})
export class UserViewNotificationsPage {

  title :string;
  descript : number;

  notiRef: AngularFireList<any>;
  notis : Observable<any[]>;


  constructor(
  public navCtrl: NavController, 
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.notiRef =db.list(`Notifications/User/`, ref=>ref.orderByChild("TimeStamp"));

    this.notis = this.notiRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  checkData(){
    if(this.title){
      if(this.descript){
        this.addNoti();
      }else{
        this.presentToast("Provide a description")
      }
    }else{
      this.presentToast("Title not provided")
    }
  }

addNoti(){
  firebase.database().ref("Notifications").child("User").push({
    Title : this.title,
    Description : this.descript,
    Status : "Pending",
    TimeStamp : moment().format()
  }).then(()=>{
    this.title = null;
    this.descript = null;
    this.presentToast("Notification Added")
  })
}

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position :"bottom",
      showCloseButton: false,
    });
    toast.present();
  }
}