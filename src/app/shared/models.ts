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
    this.categorias = [];
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

export class Pesquisa {
  autor: string;
  categoria: string;
  conteudo: string;

  constructor() {
    this.autor = '';
    this.categoria = '';
    this.conteudo = '';
  }
}
