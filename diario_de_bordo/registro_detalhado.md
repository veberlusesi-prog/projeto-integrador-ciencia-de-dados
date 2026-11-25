Diário de Bordo — Projeto Integrador de Ciência de Dados

Identificação do projeto

Projeto: Análise de dados hoteleiros — Nice Rooms
Cidade fictícia: Port Alder
Quantidade de hotéis: 14
Período analisado: 2027–2028
Ferramenta de inteligência artificial: Claude

Histórico de desenvolvimento

Este documento registra todo o processo de desenvolvimento do Projeto Integrador, incluindo as solicitações feitas à inteligência artificial, os códigos produzidos, as explicações técnicas, os testes, os erros encontrados e os aprendizados adquiridos.

O objetivo é documentar não apenas o resultado final, mas também compreender como cada parte do projeto foi construída.

Etapa 1 — Exploração e preparação dos dados

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

Etapa 2 — Análise estatística

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

Etapa 3 — Banco de dados

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

Etapa 4 — Visualização de dados

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

Etapa 5 — Painel web

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

Etapa 6 — Relatório executivo e apresentação

Atividades realizadas

Aguardando início.

Registro das atividades

Ainda não iniciado.

# DIÁRIO DE CAMPO
**Projeto Integrador de Ciência de Dados — Port Alder**

## 1. Melhores prompts utilizados

Durante o desenvolvimento do projeto, a inteligência artificial foi utilizada como ferramenta de apoio à programação, análise e construção do dashboard. Entre as solicitações mais úteis, destacam-se:

**1. Exploração e preparação dos dados**

Foi solicitado auxílio para carregar os sete arquivos JSONL, analisar suas dimensões, identificar tipos de dados, verificar valores ausentes e compreender a relação entre as tabelas. O prompt foi importante porque estabeleceu uma sequência de trabalho organizada e evitou alterações desnecessárias nos dados originais.

**2. Análise estatística**

Foi solicitado o desenvolvimento de análises utilizando Pandas, incluindo comparação entre categorias hoteleiras, sazonalidade, avaliações, eventos, correlações e projeções para 2029. A IA também foi utilizada para explicar os resultados e diferenciar associação estatística de causalidade.

**3. Desenvolvimento do dashboard**

Foi solicitado um painel web para apresentar indicadores de desempenho dos hotéis, gráficos, filtros por categoria e ano e uma tabela comparativa. O processo foi realizado em etapas, com revisão do código, testes no navegador e correções após a identificação de problemas.

## 2. Erros identificados e correções

Durante o projeto, ocorreram erros de programação e dificuldades relacionadas ao ambiente de desenvolvimento.

- **Erro de variável não definida (`NameError`):** as variáveis `reviews` e `fluxo_sankey` não estavam disponíveis na sessão do notebook. Isso aconteceu porque as células responsáveis pelo carregamento dos dados não haviam sido executadas na sessão atual. A solução foi reorganizar a execução e garantir que os dados fossem carregados antes da construção do gráfico.

- **Erro de exibição do Plotly (`ValueError`):** o gráfico Sankey não foi exibido porque o ambiente não possuía uma versão adequada do pacote `nbformat`. Foi necessário instalar dependências para permitir a visualização interativa.

- **Falha na instalação da biblioteca WordCloud:** a instalação apresentou erro durante a construção do pacote no Python 3.15.2. Como alternativa, foi utilizada outra abordagem para produzir visualizações de palavras frequentes, permitindo comparar avaliações positivas e negativas.

- **Erro de sintaxe (`SyntaxError`):** um trecho de HTML foi executado em uma célula Python. Além disso, havia um travessão Unicode (`–`) no trecho interpretado como código. O conteúdo foi colocado no arquivo HTML apropriado, separando a estrutura da página do código Python.

- **Referência incorreta a uma coluna:** durante a organização das consultas, foi utilizada uma referência a `decision_date`, que não existia na tabela `rate_decisions`. A coluna correta era `week_start`.

- **Problema na apresentação do gráfico por categoria:** inicialmente, as barras de ocupação e ADR apareciam sobrepostas, pois representavam métricas com escalas diferentes. O gráfico foi reformulado para apresentar ocupação em barras e ADR em linha, utilizando dois eixos.

Também foram identificadas limitações de validação: o teste da mensagem de ausência de resultados ainda não foi concluído. Portanto, essa funcionalidade permanece como pendência de teste.

## 3. Aprendizados obtidos

Um dos principais aprendizados foi compreender que os valores ausentes nem sempre representam erros nos dados. Por exemplo, a coluna `flow_through` apresenta ausências nas primeiras 52 semanas por não existir comparação com o período anterior. Da mesma forma, avaliações sem resposta apresentam campos de resposta vazios.

Outro aprendizado foi a importância de respeitar a granularidade das tabelas. Os registros diários e semanais representam períodos diferentes e não devem ser comparados diretamente sem considerar essa diferença.

Também foi possível compreender que correlação não significa causalidade. Uma relação estatística entre ocupação e diária não prova que uma variável seja responsável pela outra.

## 4. Reflexão sobre o uso da inteligência artificial

A inteligência artificial contribuiu para acelerar o desenvolvimento do projeto, auxiliar na compreensão de conceitos e propor soluções para problemas técnicos. Entretanto, os resultados precisaram ser executados, conferidos e interpretados.

O projeto demonstrou que a IA não substitui a análise crítica. Um código pode parecer correto e ainda apresentar erros de execução, utilizar uma coluna inexistente ou produzir uma visualização inadequada.

Por isso, o processo de revisar, testar e compreender cada etapa foi tão importante quanto produzir os códigos e gráficos