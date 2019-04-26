import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { BarbecueResultPage } from '../barbecue-result/barbecue-result';

/**
 * Generated class for the BarbecuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barbecue',
  templateUrl: 'barbecue.html',
})
export class BarbecuePage {

	adtH: number = 0;
	adtM: number = 0;
	chd: number = 0;
	drink: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarbecuePage');
  }

  calcAdt(signal, gender){
  	if (signal == '+') {
  		if (gender == 0) {
  			this.adtH++;
  		} else {
  			this.adtM++;
  		}
  	} else {
  		if (gender == 0 && this.adtH > 0) {
  			this.adtH--;
  		} else {
  			if (this.adtM > 0) {
  				this.adtM--;
  			}
  		}
  	}
  }

  calcChd(signal){
  	if (signal == '+') {
  		this.chd++;
  	} else {
  		if (this.chd > 0) {
  			this.chd--;
  		}
  	}
  }

  calcDrink(signal){
  	if (signal == '+') {
  		this.drink++;
  	} else {
  		if (this.drink > 0) {
  			this.drink--;
  		}
  	}
  }

  calcular(){
		this.navCtrl.push(BarbecueResultPage, {
			adtH: this.adtH,
			adtM: this.adtM,
			chd: this.chd, 
			drink: this.drink
		});
  }

}
