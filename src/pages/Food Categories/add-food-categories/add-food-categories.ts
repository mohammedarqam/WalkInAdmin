import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-add-food-categories',
  templateUrl: 'add-food-categories.html',
})
export class AddFoodCategoriesPage {

  name : string;
  catRef = firebase.database().ref("Restaurant Data/Food Categories");
  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
  }


  checkData(){
    if(this.name){
      this.addCat();
    }else{  
      this.presentToast("Category Name Empty")
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    this.catRef.push({
      Name : this.name,
      TimeStamp : moment().format()
    }).then(()=>{
      this.close();
    })
  }

 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  });
  toast.present();
}
capsName(name){
  this.name = name.toUpperCase();
}

}
