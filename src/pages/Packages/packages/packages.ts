import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddPackagesPage } from '../add-packages/add-packages';
import { PackageOptionsPage } from '../package-options/package-options';


@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  packagesRef: AngularFireList<any>;
  packages: Observable<any[]>;


  constructor(
    public navCtrl: NavController, 
    public db : AngularFireDatabase,
    public popoverCtrl : PopoverController,
    public modalCtrl : ModalController,
    public navParams: NavParams
    ) {
    this.packagesRef =db.list('Packages', ref=>ref.orderByChild("TimeStamp"));

    this.packages = this.packagesRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  
  }



  viewOptions(myEvent,p){
      let popover = this.popoverCtrl.create(PackageOptionsPage,{partner : p});
      popover.present({
        ev: myEvent
      });
  }


  gtAddPackage(){
    let packagesAdd = this.modalCtrl.create(AddPackagesPage,null,{enableBackdropDismiss : false});
    packagesAdd.present();
  }

}
