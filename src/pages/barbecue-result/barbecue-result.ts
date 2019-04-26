import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BarbecueResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barbecue-result',
  templateUrl: 'barbecue-result.html',
})
export class BarbecueResultPage {

	adtH: number = 0;
	adtM: number = 0;
	chd: number = 0;
	drink: number = 0;

	carne: number = 500;
	linguica: number = 200;
	frango: number = 200;
	agua: number = 1;
	cerveja: number = 4;
	suco: number = 1;
	refri: number = 1;
	cebola: number = 1;
	farofa: number = 1;
	pao: number = 2;
	sal: number = 1;
	tomate: number = 1;
	vinagre: number = 1;
	carvao: number = 1;
	copos: number = 1;
	guardanapos: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.adtH = navParams.get("adtH");
  	this.adtM = navParams.get("adtM");
  	this.chd = navParams.get("chd");
  	this.drink = navParams.get("drink");
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }


}
