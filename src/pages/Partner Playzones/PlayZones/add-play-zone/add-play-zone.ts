import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, LoadingController} from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-add-play-zone',
  templateUrl: 'add-play-zone.html',
})
export class AddPlayZonePage {

  AdminUid = firebase.auth().currentUser.uid;
  adminRef = firebase.database().ref("WalkInAdmin").child(this.AdminUid);
  public adminEmail : string;
  public adminPass : string;


  Name : string;
  Partner : string;
  PlayZoneContact : string;
  Address : string;
  Description : string = null;
  LoyalProfit : number;
  ProfitToLoyalPercentage :number;
  VisitsL : number = 3;

  partnersRef: AngularFireList<any>;
  partners: Observable<any[]>;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public loadingCtrl : LoadingController,
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    this.partnersRef =db.list('PartnerAdmins', ref=>ref.orderByChild("TimeStamp"));

    this.partners = this.partnersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
    this.getAdminDetails();
  }

  createRestId(){
    let rid = this.Name.replace(/\s/g,'').toLowerCase() ;
    let extn = "@walkin.com"
    rid = rid+ extn;
    return rid;
  }

  getAdminDetails(){
    this.adminRef.once('value',itemSnap=>{
      this.adminEmail = itemSnap.val().Email;
      this.adminPass = itemSnap.val().Password;
    })   
    }


  checkData(){
    if(this.Name){
      if(this.Partner){
        if(this.Address){
          if(this.ProfitToLoyalPercentage){
            if(this.Description){
              this.savePlayZone();
            }else{
              this.presentToast("Enter a Description");
            }
          }else{
            this.presentToast("Provide a Percentage");
          }
        }else{
          this.presentToast("Address not provided");
        }
      }else{
        this.presentToast("Select a Partner Name")
      }
    }else{
      this.presentToast("Provide a PlayZone Name");
    }


  }

  savePlayZone(){
    let partnermail = this.createRestId();
    let partnerPass = this.generatePassword();

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    firebase.auth().signOut().then(()=>{
      firebase.auth().createUserWithEmailAndPassword(partnermail,partnerPass).catch((e)=>{
        var msg = e.message;
        this.presentToast(msg);

        firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).then(()=>{
          loading.dismiss();
        })

      }).then(()=>{
        firebase.database().ref("PlayZones").child(firebase.auth().currentUser.uid).set({
          PlayZoneName : this.Name,
          AdminId : this.Partner,
          PlayZoneContact : this.PlayZoneContact,
          Address : this.Address,
          ProfitToLoyalPercentage : this.ProfitToLoyalPercentage,
          VisitsL : this.VisitsL,
          Description : this.Description,
          TimeStamp : moment().format(),
          PlayZoneEmail : partnermail,
          PlayZonePassword : partnerPass,
        }).then(()=>{
          firebase.database().ref("PartnerAdmins").child(this.Partner).child("Stores").child(firebase.auth().currentUser.uid).set(true).then(()=>{
            firebase.auth().signOut().then(()=>{
              firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).then(()=>{
                loading.dismiss();
                this.presentToast("PlayZone Added");
                this.close();
              })
            })
          })
        })
      })
    })




  }


  generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
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

  capsName(Name){
    this.Name = Name.toUpperCase();
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
