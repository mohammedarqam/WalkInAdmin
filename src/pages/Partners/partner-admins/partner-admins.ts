import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController , NavParams, ModalController, MenuController } from 'ionic-angular';
import { PartnerAdminAddPage } from '../partner-admin-add/partner-admin-add';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PartnerAdminOptionsPage } from '../partner-admin-options/partner-admin-options';

@IonicPage()
@Component({
  selector: 'page-partner-admins',
  templateUrl: 'partner-admins.html',
})
export class PartnerAdminsPage {


  partnersRef = this.db.list('Partners', ref=>ref.orderByChild("TimeStamp"));
  partners: Array<any> = [];
  partnersLoaded: Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public modalCtrl : ModalController,
  public popoverCtrl: PopoverController,
  public db : AngularFireDatabase,
  public menuCtrl : MenuController,
  ) {
    this.menuCtrl.enable(true);

    this.getRestaurants();
  }



  getRestaurants(){
    this.partnersRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
        console.log(temp);
      })
      this.partners = tempArray;
      this.partnersLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.partners = this.partnersLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.partners = this.partners.filter((v) => {
      if((v.Name || v.Phone || v.Email) && q) {
        if (
          (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.Phone.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.Email.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ) {
          return true;
        }
        return false;
      }
    });
  }

  viewOptions(myEvent,p){
      let popover = this.popoverCtrl.create(PartnerAdminOptionsPage,{partner : p});
      popover.present({
        ev: myEvent
      });
  }

  addAdmin(){
    let partnerAdd = this.modalCtrl.create(PartnerAdminAddPage,null,{enableBackdropDismiss : false});
    partnerAdd.present();
  }


}
