# AgrinessCms

Aplicação desenvolvida em Angular para um simples gerenciador de conteúdo onde será possível cadastrar incríveis textos para leitura futura.

Este é o projeto de front-end do Agriness - CMS. Para a execução deste projeto é necessário antes a execução da API que se encontra no projeto https://github.com/mateusvsv/agriness-api.

## Requisitos

Para executar o projeto é necessário ter o Node.js nas versões 8.x ou 10.x.

## Preparando o Projeto

Com o Node.js, juntamente com o npm, devidamente instalado nas versões citadas, podemos baixar e configurar o projeto.

Clonando o repositório:
```
git clone git@github.com:mateusvsv/agriness-cms.git
```
Entrando no diretório do projeto:
```
cd agriness-cms/
```
Instalando as dependências do projeto:
```
npm install
```

## Executando

Uma vez configurado o projeto pode ser executado com o seguinte comando e estará disponível no endereço **localhost:4200**.
```
ng serve
```

Vale lembrar que para utilização correta deste projeto é necessário se certificar que a API https://github.com/mateusvsv/agriness-api esteja rodando.


### Dicas de utilização

Para cadastrar um artigo é necessário ter pelo menos uma categoria cadastrada.
O cadastro de categorias pode ser feito no menu "Categorias" na barra de navegação.

A página inicial irá lhe apresentar trechos dos 3 últimos artigos cadastrados. Para acessar as informações mais detalhadas do artigo basta clicar no seu título.

Artigos podem ser buscados por autor e categoria. A busca por conteúdo ou título infelizmente está desabilidata. :(


