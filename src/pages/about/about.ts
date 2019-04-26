import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SectionPage } from '../section/section';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  res; 
  itens = [];
  array = [];  

  constructor(public navCtrl: NavController, public http: Http, public viewCtrl: ViewController) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
     
    this.http.post('http://localhost:3000/produtos/get_produtos', {headers: headers})
      .subscribe(data => { 
        if(data.json() != 0) {
          this.res = data.json();

          console.log(this.res);
  
          for (var i = 0; i < this.res.length; i++) {
            this.array.push({
              'id': this.res[i].id,
              'nome': this.res[i].nome,
              'descricao': this.res[i].descricao,
              'preco': this.res[i].preco, 
              'preco_ant': this.res[i].preco_ant,
              'imagem': 'http://localhost:3000' + this.res[i].avatar_url
          	})
          }

          // for (var j = 0; j < 15; j++) {
          //   this.itens.push(this.array[this.itens.length]);
          // } 
   
        } else {
          console.log('Erro catastrofico.');
        } 
      },
      err => console.log(err),
    () => {
    
    });
  }

  ionViewWillEnter(){
    this.viewCtrl.setBackButtonText('');
  }
 
  informacoes(i) { 
    this.navCtrl.push(SectionPage, {
		  item: i
		})
  }

}
