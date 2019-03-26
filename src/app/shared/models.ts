export class Artigo {
  id: number;
  titulo: string;
  conteudo: string;
  autor: Autor;
  categoria: Array<Categoria>;
  dataCriacao: string;
  ultimaModificacao: string;
  publicado: boolean;

  constructor() {
    this.autor = new Autor();
    this.categoria = [];
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
