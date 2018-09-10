import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PlayZoneDetailsPage } from '../play-zone-details/play-zone-details';
import { EditPlayZonePage } from '../edit-play-zone/edit-play-zone';
import { DelplayzonePage } from '../delplayzone/delplayzone';


@IonicPage()
@Component({
  selector: 'page-play-zone-options',
  templateUrl: 'play-zone-options.html',
})
export class PlayZoneOptionsPage {

  playZone = this.navParams.get("playZone");

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public viewCtrl : ViewController,
  public navParams: NavParams
  ) {
  }

  view(){
    let partnerView = this.modalCtrl.create(PlayZoneDetailsPage,{playZone : this.playZone},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }
  edit(){
    let partnerEdit = this.modalCtrl.create(EditPlayZonePage,{playZone : this.playZone},{enableBackdropDismiss : false});
    partnerEdit.present();
    this.close();
  }
  delete(){
    let partnerDelete = this.modalCtrl.create(DelplayzonePage,{playZone : this.playZone},{enableBackdropDismiss : false});
    partnerDelete.present();
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
