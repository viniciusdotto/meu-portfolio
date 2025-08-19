# Meu Portfólio

Este é o repositório do meu portfólio pessoal em formato de site, desenvolvido para apresentar minhas experiências, formação acadêmica e projetos.

## Funcionalidades

- Navegação entre seções de Início, Experiência e Formação.
- Listagem de projetos desenvolvidos, com links para os repositórios.
- Informações sobre minha formação acadêmica, cursos intensivos e idiomas.
- Layout responsivo para diferentes dispositivos.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com [Sass](https://sass-lang.com/) para pré-processamento)
- **JavaScript**

## Estrutura do Projeto

```
index.html
index.js
css/
  style.css
img/
  Perfil.png
scss/
  _cores.scss
  _footer.scss
  _geral.scss
  _header.scss
  _main.scss
  _reset.scss
  _responsive.scss
  _tipografia.scss
  style.scss
```

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Compile os arquivos SCSS para CSS:
   ```sh
   npm run scss
   ```
3. Abra o arquivo `index.html` em seu navegador.

## Scripts

- `npm run scss`: Compila os arquivos SCSS da pasta `scss/` para CSS na pasta `css/` usando o [Sass](https://sass-lang.com/).

## Imagem de Perfil

O avatar utilizado está disponível em `img/Perfil.png`.

---