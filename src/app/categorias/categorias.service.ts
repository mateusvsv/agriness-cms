import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categoria } from './../shared/models';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  urlListaCadastro = 'http://127.0.0.1:8000/categorias/';
  urlEdicao = 'http://127.0.0.1:8000/categoria/';

  constructor(private http: HttpClient) { }

  obterCategorias() {
    return this.http.get<Categoria[]>(this.urlListaCadastro);
  }

  cadastrarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlListaCadastro, categoria);
  }

  editarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.urlEdicao + categoria.id + '/', categoria);
  }

}
