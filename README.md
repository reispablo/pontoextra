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

## Contador da prova

Cada aba mostra uma contagem regressiva (hh:mm:ss) até o horário de término da prova daquela turma. As datas ficam no objeto `PROVAS`, também em [`js/data.js`](js/data.js):

```js
const PROVAS = {
  implantacao: "2026-09-08T19:00:00",
  testes: "2026-09-09T19:00:00",
};
```

Quando o horário passa, o contador exibe "Prova encerrada".

## Visualizar

Abra o [`index.html`](index.html) diretamente no navegador, sem necessidade de build ou servidor.
