import { ArtigosService } from './../artigos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artigo } from './../../shared/models';

@Component({
  selector: 'app-artigo-detalhe',
  templateUrl: './artigo-detalhe.component.html',
  styleUrls: ['./artigo-detalhe.component.css']
})
export class ArtigoDetalheComponent implements OnInit {

  id: number;
  artigo: Artigo = new Artigo();

  constructor(private route: ActivatedRoute, private service: ArtigosService) { }

  publicar() {
    this.artigo.publicado = true;
    this.service.editar(this.artigo).subscribe(response => this.artigo = response);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.service.obterArtigo(this.id).subscribe(response => this.artigo = response);
      }
    );
  }

}
