import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PartnerAdminAddPage } from '../partner-admin-add/partner-admin-add';
import { PartnerAdminEditPage } from '../partner-admin-edit/partner-admin-edit';
import { PartnerAdminViewPage } from '../partner-admin-view/partner-admin-view';
import { PartnerDeletePage } from '../partner-delete/partner-delete';


@IonicPage()
@Component({
  selector: 'page-partner-admin-options',
  templateUrl: 'partner-admin-options.html',
})
export class PartnerAdminOptionsPage {

  partner = this.navParams.get("partner");

  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public navParams: NavParams,
  public viewCtrl : ViewController,
  ) {
    console.log(this.partner);
  }

  view(){
    let partnerView = this.modalCtrl.create(PartnerAdminViewPage,{partner : this.partner},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }
  edit(){
    let partnerEdit = this.modalCtrl.create(PartnerAdminEditPage,{partner : this.partner},{enableBackdropDismiss : false});
    partnerEdit.present();
    this.close();
  }
  delete(){
    let partnerDelete = this.modalCtrl.create(PartnerDeletePage,{partner : this.partner},{enableBackdropDismiss : false});
    partnerDelete.present();
    this.close();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
