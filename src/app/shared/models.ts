export class Artigo {
  id: number;
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
  id: number;
  nome: string;
  descricao: string;
}

export class Autor {
  nome: string;
  email: string;
}
