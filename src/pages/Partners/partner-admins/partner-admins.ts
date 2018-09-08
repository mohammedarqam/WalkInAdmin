import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController , NavParams } from 'ionic-angular';
import { PartnerAdminAddPage } from '../partner-admin-add/partner-admin-add';
import { PartnerAdminEditPage } from '../partner-admin-edit/partner-admin-edit';
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


  partnersRef: AngularFireList<any>;
  partners: Observable<any[]>;
  search : string="";

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public popoverCtrl: PopoverController,
  public db : AngularFireDatabase,
  ) {
    this.partnersRef =db.list('PartnerAdmins', ref=>ref.orderByChild("TimeStamp"));

    this.partners = this.partnersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );


  }

  viewOptions(myEvent,p){
      let popover = this.popoverCtrl.create(PartnerAdminOptionsPage,{partner : p});
      popover.present({
        ev: myEvent
      });
  }

}
