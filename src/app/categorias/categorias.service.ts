import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Categoria } from './../shared/models';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'http://127.0.0.1:8000/categorias/';

  constructor(private http: HttpClient) { }

  obterCategorias() {
    return this.http.get<Categoria[]>(this.url);
  }

  cadastrarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

}
