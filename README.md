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
implantação/      materiais disponíveis para download na aba Implantação
testes/           materiais disponíveis para download na aba Testes
```

## Materiais das turmas

O arquivo [`implantação/Aula_Revisao_Prova_1_a_4.html`](implantação/Aula_Revisao_Prova_1_a_4.html) pode ser baixado diretamente na aba **Implantação**.

O arquivo [`testes/Revisao 09-09.html`](testes/Revisao%2009-09.html) pode ser baixado diretamente na aba **Testes**.

Como esta é uma página estática, ao adicionar outro material às pastas `implantação/` ou `testes/`, inclua também um link para ele no bloco `.downloads` da turma correspondente em [`index.html`](index.html).

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

Cada aba mostra uma contagem regressiva até o horário de término da prova daquela turma: dias restantes (quando houver) e o total de horas, minutos e segundos (hh:mm:ss). As datas ficam no objeto `PROVAS`, também em [`js/data.js`](js/data.js):

```js
const PROVAS = {
  implantacao: "2026-09-08T19:00:00",
  testes: "2026-09-16T19:00:00",
};
```

Quando o horário passa, o contador exibe "Prova encerrada".

## Visualizar

Abra o [`index.html`](index.html) diretamente no navegador, sem necessidade de build ou servidor.

## Temas

O botão no canto superior direito alterna entre os temas claro e escuro. Na primeira visita, a página segue a preferência do sistema; depois, mantém a opção escolhida no navegador.
