import { Component, OnInit } from '@angular/core';

import { Categoria } from './../shared/models';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private service: CategoriasService) { }

  categoria: Categoria = new Categoria();
  categorias = [];

  ngOnInit() {
    this.service.obterCategorias().subscribe(categorias => this.categorias = categorias);
  }

  cancelarCadastro() {
    this.categoria = new Categoria();
  }

  cadastrarCategoria(categoria) {
    this.service.cadastrarCategoria(categoria)
      .subscribe(cat => this.categorias.push(cat));
  }

}
