---
name: iniciar-desenvolvimento
description: Analisar um repositório e organizar o início ou a retomada do desenvolvimento em etapas pequenas, dependentes e verificáveis antes de alterar código. Usar ao começar um projeto, módulo, funcionalidade ou prompt de implementação; ao pedir planejamento, roadmap ou próxima etapa; ou quando o repositório possuir CLAUDE.md, AGENTS.md, documentação de arquitetura, checklists ou diretórios de prompts que devam orientar a execução.
---

# Iniciar desenvolvimento

Transformar as instruções do repositório em um plano executável e trabalhar uma etapa por vez.

## 1. Descobrir as fontes de verdade

1. Inspecionar a estrutura, o estado do Git e os arquivos de configuração.
2. Localizar, nesta ordem:
   - `AGENTS.md` aplicável ao diretório;
   - `CLAUDE.md` ou `claude.md`;
   - documentação e ADRs;
   - índices, regras gerais e checklists em diretórios de prompts;
   - convenções observáveis no código, testes e automações.
3. Ler integralmente os arquivos que governam a tarefa atual.
4. Tratar instruções mais específicas como complemento das gerais. Sinalizar conflitos reais em vez de escolher silenciosamente.
5. Não presumir que tecnologias desejadas já estejam instaladas; confirmar pelo código e pelos manifests.

Quando existir `docs/prompts-rh/`, ler sempre:

- `docs/prompts-rh/README.md`;
- `docs/prompts-rh/00-regras-gerais.md`;
- o prompt da etapa selecionada;
- `docs/prompts-rh/10-checklist-de-entrega.md`.

## 2. Diagnosticar antes de propor

Verificar:

- o que já existe e pode ser reutilizado;
- arquitetura, tecnologias e convenções efetivamente adotadas;
- alterações locais que devem ser preservadas;
- dependências concluídas e pendentes;
- lacunas entre o estado atual e o resultado pedido;
- riscos de dados, segurança, autorização, privacidade, migrations e compatibilidade;
- comandos reais de validação disponíveis.

Usar evidências com caminhos de arquivos. Não iniciar implementação durante uma solicitação apenas de diagnóstico ou planejamento.

## 3. Selecionar a etapa

Se o usuário indicar uma etapa, validar suas dependências. Caso contrário, escolher a menor próxima etapa desbloqueada que produza valor verificável.

Não agrupar módulos independentes. Separar trabalho quando houver mudança de domínio, migration relevante, contrato de API, fluxo de interface ou gate de segurança.

Para cada etapa, definir:

```md
## Etapa N — Nome orientado a resultado

Objetivo:
Escopo incluído:
Fora do escopo:
Dependências:
Arquivos ou áreas prováveis:
Critérios de aceite:
Validações:
Riscos e premissas:
```

Manter de três a sete etapas no plano imediato. Colocar detalhes futuros no roadmap, sem fingir precisão sobre código ainda não analisado.

## 4. Apresentar o plano de início

Antes de alterar arquivos, comunicar de forma curta:

1. diagnóstico confirmado;
2. etapa atual e por que ela está desbloqueada;
3. critérios de aceite;
4. validações previstas;
5. premissas ou decisões externas necessárias.

Solicitar decisão somente quando uma escolha de negócio, jurídica, trabalhista ou destrutiva mudar materialmente o resultado. Para decisões técnicas reversíveis, registrar a premissa e avançar.

## 5. Executar uma etapa por vez

Ao receber autorização para implementar — ou quando o pedido já incluir implementação:

1. implementar somente o escopo da etapa atual;
2. preservar padrões e comportamentos existentes;
3. manter regras de negócio separadas das fronteiras de API e interface;
4. incluir migrations, autorização, auditoria, privacidade e testes quando aplicáveis;
5. adicionar teste de regressão para bugs quando tecnicamente viável;
6. atualizar documentação afetada;
7. não avançar à próxima etapa enquanto gates críticos estiverem pendentes.

Replanejar se a implementação revelar dependência desconhecida. Explicar a evidência e ajustar o plano, sem expandir o escopo silenciosamente.

## 6. Aplicar o gate de conclusão

Executar as validações proporcionais ao risco e disponíveis no projeto, incluindo quando aplicável:

- formatação e lint;
- análise de tipos;
- testes unitários, integração, API e E2E;
- build;
- migrations em ambiente seguro;
- testes de autorização, isolamento de tenant e exposição de dados.

Não declarar sucesso para comandos não executados. Distinguir claramente:

- passou;
- falhou;
- não executado;
- bloqueado pelo ambiente.

Se existir checklist de entrega no repositório, aplicá-lo antes de concluir.

## 7. Entregar e indicar continuidade

Responder no formato:

```md
## Resultado

Resumo objetivo da etapa.

## Alterações

- Arquivos e comportamentos.

## Banco e segurança

- Migrations, autorização, auditoria e privacidade, ou "não aplicável".

## Validação

- Comandos executados e resultados.

## Pendências e riscos

- Itens conhecidos.
- Próxima etapa desbloqueada.
```

Não marcar a próxima etapa como iniciada. Apenas recomendá-la.
