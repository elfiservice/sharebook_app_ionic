import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeusLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-livros',
  templateUrl: 'meus-livros.html',
})
export class MeusLivrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusLivrosPage');
  }

  items = [
    'Meu livro 1',
    'Meu livro 2',
    'Meu livro 3'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
