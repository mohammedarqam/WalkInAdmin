import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddPackagesPage } from '../add-packages/add-packages';
import { PackageOptionsPage } from '../package-options/package-options';


@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  packagesRef = this.db.list('Packages', ref=>ref.orderByChild("TimeStamp"));
  packages: Array<any> = [];
  packagesLoaded: Array<any> = [];


  constructor(
    public navCtrl: NavController, 
    public db : AngularFireDatabase,
    public popoverCtrl : PopoverController,
    public modalCtrl : ModalController,
    public navParams: NavParams
    ) {
      this.getPackages();
    }
  
  
  
    getPackages(){
      this.packagesRef.snapshotChanges().subscribe(snap=>{
        let tempArray = [];
        snap.forEach(snp=>{
          let temp : any = snp.payload.val();
          temp.key = snp.key;
          tempArray.push(temp);
        })
        this.packages = tempArray;
        this.packagesLoaded = tempArray;
      })
  
    }
  
    initializeItems(): void {
      this.packages = this.packagesLoaded;
    }
    getItems(searchbar) {
      this.initializeItems();
      let q = searchbar;
      if (!q) {
        return;
      }
      this.packages = this.packages.filter((v) => {
        if((v.Name || v.NoOfPeople || v.Type) && q) {
          if (
            (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
            ||(v.NoOfPeople.toLowerCase().indexOf(q.toLowerCase()) > -1)
            ||(v.Type.toLowerCase().indexOf(q.toLowerCase()) > -1)
            ) {
            return true;
          }
          return false;
        }
      });
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
