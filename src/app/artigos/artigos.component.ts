import { Component, OnInit } from '@angular/core';
import { ArtigosService } from './artigos.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  constructor(private service: ArtigosService) {}

  ngOnInit() {
  }

}
