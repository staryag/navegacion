import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;
  mutantes:any[] = [

    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psíquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimados con energía"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( mutante:any ){
    console.log(mutante);

    //Los argumentos se pasan como un objeto con claves-valor
    this.navCtrl.push( Pagina3Page, { 'personaje': mutante } );
  }

}
