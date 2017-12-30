import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivrosDesejadosPage } from './livros-desejados';

@NgModule({
  declarations: [
    LivrosDesejadosPage,
  ],
  imports: [
    IonicPageModule.forChild(LivrosDesejadosPage),
  ],
})
export class LivrosDesejadosPageModule {}
