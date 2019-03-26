import { Component, OnInit } from '@angular/core';

import { Artigo, Categoria } from './../../shared/models';

@Component({
  selector: 'app-artigos-form',
  templateUrl: './artigos-form.component.html',
  styleUrls: ['./artigos-form.component.css']
})
export class ArtigosFormComponent implements OnInit {

  artigo = new Artigo();
  categorias = [];

  constructor() { }

  ngOnInit() {
    let categoria1 = new Categoria();
    categoria1.id = 1;
    categoria1.nome = 'Tecnologia';
    let categoria2 = new Categoria();
    categoria2.id = 2;
    categoria2.nome = 'Inovação';
    this.categorias = [categoria1, categoria2];
  }

}
