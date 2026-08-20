# Ponto Extra

Mural com a lista de alunos que ganharam ponto extra, separados por turma.

## Turmas

- **Implantação**
- **Testes**

## Atualizar os nomes

Os nomes ficam no array `alunos` dentro de [`index.html`](index.html), próximo ao final do arquivo:

```js
const alunos = {
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
