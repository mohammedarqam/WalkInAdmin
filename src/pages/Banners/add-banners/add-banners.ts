import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import moment from 'moment';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-add-banners',
  templateUrl: 'add-banners.html',
})
export class AddBannersPage {

  order: string;
  img1: any;
  img2: any;
  url: any;

imageRef = firebase.storage().ref("Banners/" + this.order);

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl : ViewController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, ) {
  }

  UploadPic() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();


    firebase.storage().ref("Banners/" + this.order).put(this.img2).then(()=>{
      firebase.storage().ref("Banners/" + this.order).getDownloadURL().then((dURL)=>{
        this.url = dURL;
      }).then(()=>{
        firebase.database().ref("Extra Data/Banners").push({
          Name : this.order,
          Image : this.url,
          PostTime : moment().format("DD/MMM-HH:mm")
        }).then(()=>{
          this.close();
        }).then(()=>{
          this.presentToast();
          loading.dismiss();
        })
      })
    })
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Banner Added',
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();


  }

  close(){
    this.viewCtrl.dismiss();
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.img2 = file;
  }


removeImage(){
  this.img1=null;
}

}
