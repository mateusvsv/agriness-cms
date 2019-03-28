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

  editar(categoria) {
    this.categoria = categoria;
  }

  atualizar() {
    this.service.cadastrarCategoria(this.categoria).subscribe(categoria => {
      this.atualizarGridCategoria(categoria);
      this.cancelarCadastro();
    });
  }

  atualizarGridCategoria(categoria) {
    let index = this.categorias.findIndex(c => c.id === categoria.id);
    this.categorias[index] = categoria;
  }

  cadastrarCategoria() {
    if (this.categoria.id) {
      this.atualizar();
    } else {
      this.service.cadastrarCategoria(this.categoria)
        .subscribe(categoria => {
          this.categorias.push(categoria);
          this.cancelarCadastro();
        });
    }
  }

}
