import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddPlayZonePage } from '../add-play-zone/add-play-zone';
import { PlayZoneOptionsPage } from '../play-zone-options/play-zone-options';


@IonicPage()
@Component({
  selector: 'page-view-play-zone',
  templateUrl: 'view-play-zone.html',
})
export class ViewPlayZonePage {

  playZonesRef: AngularFireList<any>;
  playZones: Observable<any[]>;

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public popoverCtrl: PopoverController,
  public db : AngularFireDatabase,
  public navParams: NavParams) {
    this.playZonesRef =db.list('PlayZones', ref=>ref.orderByChild("TimeStamp"));

    this.playZones = this.playZonesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addPlayZone(){
    let partnerAdd = this.modalCtrl.create(AddPlayZonePage,null,{enableBackdropDismiss : false});
    partnerAdd.present();
  }

  viewOptions(myEvent,p){
    let popover = this.popoverCtrl.create(PlayZoneOptionsPage,{playZone : p});
    popover.present({
      ev: myEvent
    });
}




}
