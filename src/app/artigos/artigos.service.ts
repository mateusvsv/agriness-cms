import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Artigo } from './../shared/models';

@Injectable()
export class ArtigosService {

  url = 'http://127.0.0.1:8000/artigos/';

  constructor(private http: HttpClient) { }

  getArtigos() {
  }

  cadastrarArtigo(artigo: Artigo): Observable<Artigo> {
    return this.http.post<Artigo>(this.url, artigo);
  }
}
