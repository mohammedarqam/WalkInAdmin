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

  restKey =  this.navParams.get("key");

  @ViewChild('barCanvas') barCanvas ;
  barChart: any;

  menuRef= firebase.database().ref("Restaurant Data/Menus").child(this.restKey);
  
  ItemNames  : Array<any> = [];
  Ordered  : Array<any> = [];

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

      this.ItemNames = [];
      this.Ordered = [];
        this.menuRef.once('value',itemSnap=>{
            itemSnap.forEach(snap=>{
                this.ItemNames.push(snap.val().ItemName)
                this.Ordered.push(snap.val().Ordered)
            })
            return false;
            }).then(()=>{
        this.viewBarChart();
        loading.dismiss();
    })
 
  } 


  viewBarChart(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
          labels: this.ItemNames,
          datasets: [{
              label: '# of Orders',
              data: this.Ordered,
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


