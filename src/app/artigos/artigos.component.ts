import { Component, OnInit } from '@angular/core';
import { ArtigosService } from './artigos.service';
import { Artigo } from './../shared/models';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  constructor(private service: ArtigosService) {}

  artigo: Artigo = new Artigo();
  artigos: Array<Artigo> = [];

  ngOnInit() {
    this.artigos = this.service.getArtigos();
  }

}
