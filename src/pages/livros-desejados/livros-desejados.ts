import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LivrosDesejadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros-desejados',
  templateUrl: 'livros-desejados.html',
})
export class LivrosDesejadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosDesejadosPage');
  }

  items = [
    'Meu livro Reservado 1',
    'Meu livro Reservado 2',
    'Meu livro Reservado 3'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
