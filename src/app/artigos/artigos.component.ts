import { Component, OnInit } from '@angular/core';

import { CategoriasService } from './../categorias/categorias.service';
import { ArtigosService } from './artigos.service';
import { Artigo, Categoria, Pesquisa } from './../shared/models';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})

export class ArtigosComponent implements OnInit {

  constructor(private service: ArtigosService, private categoriaService: CategoriasService) {}

  artigo: Artigo = new Artigo();
  artigos: Array<Artigo> = [];
  categorias: Array<Categoria> = [];
  pesquisa: Pesquisa = new Pesquisa();
  paginador = {
    totalItens: 0,
    totalPaginas: [1],
    itensPagina: 2,
    proximaPagina: undefined,
    voltarPagina: undefined
  }

  pesquisar(busca) {
    this.service.pesquisarArtigos(busca).subscribe(artigos => this.artigos = artigos);
  }

  limparBusca() {
    this.pesquisa = new Pesquisa();
  }

  selecionaCategoria(event) {
    this.pesquisa.categoria = event.target.value;
  }

  montarPaginador(response) {
    this.paginador.totalItens = response.count;
    let totalPaginas = Math.round(this.paginador.totalItens/this.paginador.itensPagina);
    if (totalPaginas) {
      this.paginador.totalPaginas = Array(totalPaginas).fill(totalPaginas).map((x, i) => i);
    }
  }

  ngOnInit() {
    this.categoriaService.obterCategorias().subscribe(categorias => this.categorias = categorias);
    this.service.obterArtigos().subscribe(response => {
      this.artigos = response['results'];
      this.montarPaginador(response);
    });
  }

}
