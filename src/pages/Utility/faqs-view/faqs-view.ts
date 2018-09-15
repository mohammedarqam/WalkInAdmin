import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-faqs-view',
  templateUrl: 'faqs-view.html',
})
export class FaqsViewPage {

  faqsRef: AngularFireList<any>;
  faqs: Observable<any[]>;
  fRef = firebase.database().ref("Extra Data").child("FAQs");

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl : AlertController,
  public navParams: NavParams
  ) {
    this.faqsRef =db.list('Extra Data/FAQs', ref=>ref.orderByChild("Priority"));

    this.faqs = this.faqsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }


  addFaq() {
    let alert = this.alertCtrl.create({
      title: 'Add an Faq',
      message: 'Careful about the priority..!!',
      enableBackdropDismiss : false,
      inputs: [
        {
          name: 'ques',
          placeholder: 'Question'
        },
        {
          name: 'ans',
          placeholder: 'Answer',
          type: 'textarea'
        },
        {
          name: 'prio',
          placeholder: 'Priority',
          type : 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Add',
          handler: data => {
            if(data.ques){
              if(data.ans){
                if(data.prio){
                  this.sendFaq(data.ques,data.ans,data.prio);
                }else{
                  this.presentToast("Priority Empty")
                }
              }else{
                this.presentToast("Provide an Answer")
              }
            }else{
              this.presentToast("Question Empty")
            }
          }
        }
      ]
    });
    alert.present();
  }
  
  sendFaq(ques,ans,prio){
    this.fRef.push({
      Question : ques,
      Answer  : ans,
      Priority : prio
    }).then(()=>{
      this.presentToast("Question Added");
    })
  }


presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'top',
  });
  toast.present();

}

}
