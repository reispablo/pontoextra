# Ponto Extra

Mural com a lista de alunos que ganharam ponto extra, separados por turma.

## Turmas

- **Implantação**
- **Testes**

## Estrutura do projeto

```
index.html       estrutura da página
css/style.css     estilos e temas (claro/escuro)
js/data.js        lista de alunos por turma
js/app.js         renderização e controle das abas
```

## Atualizar os nomes

Os nomes ficam no objeto `ALUNOS` em [`js/data.js`](js/data.js):

```js
const ALUNOS = {
  implantacao: [
    "Nome do aluno",
  ],
  testes: [
    "Nome do aluno",
  ],
};
```

Basta adicionar ou remover nomes nessas listas — a página ordena os nomes em ordem alfabética automaticamente ao carregar.

## Visualizar

Abra o [`index.html`](index.html) diretamente no navegador, sem necessidade de build ou servidor.
