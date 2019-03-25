import { Component, OnInit } from '@angular/core';

import { Categoria } from './../shared/models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor() { }
  categoria: Categoria = new Categoria();
  categorias = [];

  ngOnInit() {
    let categoria1 = new Categoria();
    categoria1.nome = 'Tecnologia';
    let categoria2 = new Categoria();
    categoria2.nome = 'Inovação';
    this.categorias = [categoria1, categoria2];
    this.categoria.nome = 'Nova';
    this.categoria.descricao = 'descricao';
  }

  cancelarCadastro() {
    this.categoria = new Categoria();
  }

}
