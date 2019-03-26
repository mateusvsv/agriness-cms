import { Component, OnInit } from '@angular/core';

import { Artigo, Categoria } from './../../shared/models';
import { CategoriasService } from './../../categorias/categorias.service';

@Component({
  selector: 'app-artigos-form',
  templateUrl: './artigos-form.component.html',
  styleUrls: ['./artigos-form.component.css']
})
export class ArtigosFormComponent implements OnInit {

  artigo = new Artigo();
  categorias = [];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.obterCategorias().subscribe(categorias => this.categorias = categorias);
  }

}
