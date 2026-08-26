# Aula de revisão — Prova das Aulas 1 a 4

## Objetivo

Revisar, relacionar e aplicar os conhecimentos necessários à prova de Implantação de Sistemas: conceito e métodos de implantação, ambientes DEV/HOM/PROD, planejamento e replanejamento, infraestrutura e segurança e características do Kanban.

## Resultado esperado

Ao final da aula, o estudante deverá ser capaz de:

- explicar implantação como entrega da solução funcionando, e não apenas programação ou instalação;
- reconhecer os métodos Big Bang, paralelo, piloto e gradual em situações profissionais;
- distinguir finalidade, pessoas e dados dos ambientes DEV, HOM e PROD;
- identificar os campos de um cronograma executável e replanejá-lo sem retirar validações;
- avaliar capacidade, compatibilidade, conectividade, segurança e continuidade com evidências;
- emitir parecer aprovado, aprovado com ressalvas ou bloqueado de forma coerente;
- reconhecer quadro visual, fluxo contínuo e limite de WIP como características do Kanban;
- redigir uma orientação que conecte as quatro aulas.

## Materiais

- `Aula_Revisao_Prova_1_a_4.html`, aberto em navegador;
- projetor ou tela;
- folhas ou documento compartilhado para a oficina integrada;
- prova e gabarito somente para uso do professor.

## Roteiro de 4 horas

| Tempo | Etapa | Mediação docente |
| ---: | --- | --- |
| 15 min | Diagnóstico | Pedir que as duplas ordenem as decisões da implantação. Não corrigir imediatamente. |
| 25 min | Mapa integrado | Construir a sequência método → ambientes → cronograma → condição de liberação. |
| 30 min | Aula 1 | Comparar desenvolvimento e implantação; aplicar os quatro métodos a exemplos. |
| 30 min | Aula 2 | Montar a tabela DEV/HOM/PROD e discutir o risco de HOM usar o banco de PROD. |
| 10 min | Intervalo | Pausa. |
| 35 min | Aula 3 | Completar um cronograma e simular atraso com preservação do plano original. |
| 35 min | Aula 4 | Analisar carga, requisitos, controles, evidências e pareceres. |
| 20 min | Aula extra | Construir um quadro Kanban simples e discutir limite de WIP. |
| 25 min | Oficina integrada | Grupos redigem a orientação para a Escola Caminhos e fazem correção em pares. |
| 10 min | Quiz | Resposta individual e correção comentada. |
| 5 min | Fechamento | Cada estudante registra o tópico que ainda precisa revisar. |
| **240 min** | **Total** |  |

## Cobertura da prova

| Questão da prova | Conteúdo | Momento da revisão |
| ---: | --- | --- |
| 1 | Conceito de implantação | Mapa integrado e Aula 1 |
| 2 | Método piloto | Aula 1 e quiz 2 |
| 3 | Homologação | Aula 2 e quiz 3 |
| 4 | Mistura entre HOM e PROD | Aula 2 e quiz 4 |
| 5 | Campos do cronograma | Aula 3 e quiz 5 |
| 6 | Replanejamento após incidente | Aula 3 e quiz 6 |
| 7 | Usuários simultâneos | Aula 4 e quiz 7 |
| 8 | Backup sem restauração testada | Aula 4 e quiz 8 |
| 9 | Kanban | Aula extra e quiz 9 |
| 10 | Integração das quatro aulas | Oficina Escola Caminhos |

## Gabarito do quiz formativo

1. **B** — Implantar envolve preparar, configurar, validar e colocar a solução em operação.
2. **C** — O piloto começa com um grupo, setor ou unidade limitada.
3. **B** — HOM é o ambiente de validação e aceite pelos usuários-chave.
4. **C** — HOM ligado ao banco de PROD pode alterar dados reais durante testes.
5. **A** — Um plano executável informa horários, dependências, responsáveis, custos e evidências.
6. **B** — O atraso exige recalcular dependências, preservar validações e manter o histórico.
7. **A** — A simultaneidade apoia o dimensionamento de processamento, memória e conexões.
8. **C** — Backup sem restauração comprovada é uma lacuna crítica.
9. **B** — Kanban utiliza quadro visual, fluxo contínuo e limite de trabalho em andamento.

## Orientação para a oficina integrada

### Critérios — 10 pontos

| Critério | Pontos | Evidências esperadas |
| --- | ---: | --- |
| Método de implantação | 2 | Preferência por paralelo, piloto ou gradual, com justificativa ligada à continuidade e à redução de risco. Outra escolha pode ser aceita se for tecnicamente bem controlada. |
| Ambientes | 2 | DEV com dados fictícios para construção/testes iniciais; HOM com dados fictícios ou anonimizados para validação/aceite; PROD para operação oficial e dados reais. |
| Planejamento | 2 | Pelo menos duas providências: janela, responsáveis, dependências, custos, backup, testes, aceite, retorno, comunicação ou operação assistida. |
| Infraestrutura e segurança | 2 | Pelo menos duas medidas, obrigatoriamente enfrentando a capacidade insuficiente e a falta de restauração testada. Podem ser adicionados versões suportadas, acessos, HTTPS, portas e monitoramento. |
| Parecer e justificativa | 2 | Instalação bloqueada no estado atual; liberação apenas depois das correções e das evidências verificáveis. |

### Exemplo de resposta adequada

Recomenda-se começar por um piloto, por etapas ou em paralelo ao sistema atual, pois a escola precisa preservar a continuidade das aulas e reduzir o impacto de falhas. A equipe deve construir e testar inicialmente em DEV com dados fictícios, validar em HOM com usuários-chave e dados fictícios ou anonimizados e liberar em PROD somente a versão aprovada, de forma planejada. O cronograma precisa definir janela, dependências, responsáveis, testes, aceite, plano de retorno e operação assistida. Antes da liberação, a escola deve adequar o servidor à carga prevista e executar um teste documentado de restauração, além de verificar versões suportadas, acessos individuais, conexões seguras e monitoramento. A instalação está bloqueada neste momento, porque a capacidade insuficiente e a recuperação não comprovada ameaçam a disponibilidade e a integridade dos dados.

## Pontos que exigem reforço

- **Piloto não é gradual:** piloto começa com um grupo para aprender antes da expansão; gradual divide a liberação em etapas ou módulos planejados.
- **HOM não é PROD:** homologação precisa se parecer com produção, mas não deve afetar a operação nem os dados reais.
- **Backup não é recuperação:** a capacidade de retorno só é comprovada por teste de restauração registrado.
- **Replanejar não é apagar:** preservar antes/depois permite auditoria da decisão e de seus efeitos.
- **Evidência não é opinião:** inventário, relatório, log, aceite e teste documentado são verificáveis; “parece adequado” não é.
- **Kanban não exige Sprint:** o destaque é o fluxo contínuo com visualização do trabalho e limite de WIP.

## Fontes internas consideradas

- `Aula 1/Aula_01_Implantacao_de_Sistemas.html`;
- `Aula 2/Aula_02_Ambientes.html`;
- `Aula 2/Aula_Extra_Metodologias_Ageis.html`;
- `Aula 2/gabarito/orientacoes.md`;
- `Aula 3/Aula_03_Planejamento_Implantacao.html`;
- `Aula 3/gabarito/orientacoes.md`;
- `Aula 4/Aula_04_Infraestrutura.html`;
- `Aula 4/gabarito/orientacoes.md`;
- `prova 1-4/Prova_Aulas_1_a_4.md`;
- `prova 1-4/Analise_e_Gabarito_Prova_Aulas_1_a_4.md`.
