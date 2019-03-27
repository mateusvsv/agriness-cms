import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Artigo } from './../shared/models';

@Injectable()
export class ArtigosService {

  urlLista = 'http://127.0.0.1:8000/artigos/';
  urlCadastro = 'http://127.0.0.1:8000/artigo/';

  constructor(private http: HttpClient) { }

  obterArtigos() {
    return this.http.get(this.urlLista);
  }

  cadastrarArtigo(artigo: Artigo): Observable<Artigo> {
    return this.http.post<Artigo>(this.urlCadastro, artigo);
  }

  pesquisarArtigos(pesquisa) {
    let url = this.urlLista + '?autor=' + pesquisa.autor;
    url = url + '&categoria=' + pesquisa.categoria + '&conteudo=' + pesquisa.conteudo;
    return this.http.get<Artigo[]>(url);
  }


}
