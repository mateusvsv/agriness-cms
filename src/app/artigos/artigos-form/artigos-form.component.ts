import { Component, OnInit } from '@angular/core';

import { Artigo, Categoria } from './../../shared/models';
import { CategoriasService } from './../../categorias/categorias.service';
import { ArtigosService } from './../artigos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigos-form',
  templateUrl: './artigos-form.component.html',
  styleUrls: ['./artigos-form.component.css']
})
export class ArtigosFormComponent implements OnInit {

  artigo = new Artigo();
  categorias = [];

  constructor(
    private categoriasService: CategoriasService,
    private artigosService: ArtigosService,
    private router: Router) { }

  ngOnInit() {
    this.categoriasService.obterCategorias().subscribe(categorias => this.categorias = categorias);
  }

  selecionarCategoria(event, categoria: Categoria) {
    if(event.target.checked){
      this.artigo.categorias.push(categoria);
    } else {
      let index = this.artigo.categorias.indexOf(categoria, 0);
      if (index > -1) {
        this.artigo.categorias.splice(index, 1);
      }
    }
  }

  cadastrarArtigo(artigo) {
    this.artigosService.cadastrarArtigo(artigo)
      .subscribe(novo => {
        this.artigo = new Artigo();
        alert("Artigo cadastrado com sucesso.");
        this.router.navigate([''])
      });
  }

}
