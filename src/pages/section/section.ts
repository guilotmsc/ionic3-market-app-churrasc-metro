import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-section',
  templateUrl: 'section.html',
})
export class SectionPage {

	item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.item = navParams.get("item");
    console.log(this.item); 
  }

  ionViewWillEnter(){
  	this.viewCtrl.setBackButtonText('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionPage');
  }

}
