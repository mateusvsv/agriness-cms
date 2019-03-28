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
    itensPagina: 3,
    proxima: undefined,
    anterior: undefined
  };

  limparBusca() {
    this.pesquisa = new Pesquisa();
  }

  selecionaCategoria(event) {
    this.pesquisa.categoria = event.target.value;
  }

  montarPaginador(response) {
    this.paginador.totalItens = response.count;
    const totalPaginas = Math.round(this.paginador.totalItens/this.paginador.itensPagina);
    if (totalPaginas) {
      this.paginador.totalPaginas = Array(totalPaginas).fill(totalPaginas).map((x, i) => i);
    }
    if (response.next != null) {
      this.paginador.proxima = response.next.split('page=')[1];
    }
    if (response.previous != null) {
      let pagina = response.previous.split('page=')[1];
      this.paginador.anterior = pagina ? pagina : 1;
    }
  }

  obter_artigos(pagina){
    this.service.pesquisarArtigos(this.pesquisa, pagina).subscribe(response => {
      this.artigos = response['results'];
      this.montarPaginador(response);
    });
  }

  ngOnInit() {
    this.obter_artigos(1);
    this.categoriaService.obterCategorias().subscribe(categorias => this.categorias = categorias);
  }



}
