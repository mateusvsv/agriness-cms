export class Artigo {
  titulo: string;
  conteudo: string;
  autor: Autor;
  categorias: Array<Categoria>;
  dataCriacao: string;
  ultimaModificacao: string;
  publicado: boolean;

  constructor() {
    this.autor = new Autor();
  }
}

export class Categoria {
  nome: string;
  descricao: string;
}

export class Autor {

  nome: string;
  email: string;
}
