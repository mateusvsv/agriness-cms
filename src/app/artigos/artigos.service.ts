import { Artigo, Autor, Categoria } from './../shared/models';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtigosService {

  constructor() { }

  getArtigos() {
    let artigo = new Artigo();
    artigo.titulo = 'Teste';
    artigo.conteudo = "onec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.aonec id elit non miporta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet   risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui onec id elit non mi porta gravida at eget metus. Fusce dapibus,     tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui";
    let  autor = new Autor();
    autor.nome = 'Autor sem nome';
    autor.email = 'email@email.com';
    artigo.autor = autor;
    artigo.dataCriacao = '20/03/2019 12:22';
    artigo.publicado = true;
    let categoria1 = new Categoria();
    categoria1.nome = 'Tecnologia';
    let categoria2 = new Categoria();
    categoria2.nome = 'Inovação';
    artigo.categorias = [categoria1, categoria2];
    return [artigo, artigo, artigo, artigo];
  }
}
