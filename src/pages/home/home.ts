import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BarbecuePage } from '../barbecue/barbecue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/imgs/back.jpeg'
  ];

  constructor(public navCtrl: NavController) {

  }

  promo(){
  	this.navCtrl.push(AboutPage);
  }

  churrascometro(){
	this.navCtrl.push(BarbecuePage);
  }

  local(){
  	this.navCtrl.push(ContactPage);
  }

  contato(){
    this.navCtrl.push(ContactPage);
  }

}
