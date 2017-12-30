import { Component } from '@angular/core';

import { CadastrarLivroPage } from '../cadastrar-livro/cadastrar-livro';
import { MeusLivrosPage } from '../meus-livros/meus-livros';
import { HomePage } from '../home/home';
import { LivrosDesejadosPage } from '../livros-desejados/livros-desejados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastrarLivroPage;
  tab3Root = MeusLivrosPage;
  tab4Root = LivrosDesejadosPage;

  constructor() {

  }
}
