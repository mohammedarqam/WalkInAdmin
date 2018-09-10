import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Chart} from 'chart.js'
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-menu-analysis',
  templateUrl: 'menu-analysis.html',
})
export class MenuAnalysisPage {

  restKey = this.navParams.get("key");

  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  menuRef = firebase.database().ref("Menus").child(this.restKey);
  menuItems : Array<any> = [];
  constructor(
  public navCtrl: NavController, 
  public loadingCtrl : LoadingController,
  public navParams: NavParams
  ) {
    this.getMenu();
  }


  getMenu(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.menuRef.once('value',itemSnapshot=>{
      this.menuItems = [];
      itemSnapshot.forEach(itemSnap =>{
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.menuItems.push(temp);
        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
    }



  ionViewDidLoad() {
    this.viewBarChart();
  }

  viewBarChart(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple","Blue", "Yellow", "Green","Blue", "Yellow", "Green", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

  });

  }

}


