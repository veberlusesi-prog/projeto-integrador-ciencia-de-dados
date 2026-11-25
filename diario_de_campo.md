# Diário de Campo — Uso da Inteligência Artificial

## Projeto Integrador de Ciência de Dados

**Ferramenta utilizada:** Claude

### 1. Melhores prompts utilizados

**Prompt 1 — Exploração dos dados**

“Utilize Python e Pandas para carregar os arquivos JSONL do projeto. Faça uma análise inicial de cada tabela, apresentando dimensões, tipos de dados, valores ausentes e uma prévia dos registros. Compare os resultados com o README dos dados e não altere os arquivos originais.”

**Prompt 2 — Inspeção e qualidade dos dados**

“Crie uma função reutilizável para inspecionar as tabelas do projeto. Ela deve apresentar quantidade de linhas e colunas, tipos de dados, valores nulos e campos de texto vazios. Explique o funcionamento do código e permita que a função seja aplicada em diferentes tabelas.”

**Prompt 3 — Visualizações dos dados**

“Revise as visualizações do projeto utilizando Python. Inclua títulos, legendas e interpretações dos gráficos, verificando se os indicadores estão sendo calculados corretamente. Preserve os objetivos da atividade e explique os resultados encontrados.”

### 2. Erro identificado na IA e correção

Durante a análise da qualidade dos dados, identifiquei que a primeira versão da função de inspeção utilizava `isna()` para contar os valores ausentes. Entretanto, esse método não identifica textos vazios (`""`), que também estavam presentes em algumas colunas.

Foi necessário ajustar a função para identificar separadamente os valores nulos e os campos de texto vazios. Assim, a análise passou a representar melhor a situação real dos dados, sem modificar ou excluir registros.

### 3. Aprendizados obtidos

Aprendi que valores nulos e textos vazios são situações diferentes no Pandas. O método `isna()` identifica valores ausentes, mas não considera automaticamente uma string vazia como um valor nulo.

Também aprendi a importância de verificar os resultados produzidos pelo código, comparar informações com a documentação dos dados e interpretar os gráficos antes de apresentar conclusões.

### 4. Reflexão sobre o uso da IA

A inteligência artificial foi uma ferramenta importante durante o desenvolvimento do projeto, principalmente para auxiliar na escrita de códigos, na identificação de problemas e na construção das visualizações.

Apesar disso, percebi que não basta copiar e executar o código gerado. Foi necessário testar as soluções, conferir os resultados, identificar inconsistências e compreender o funcionamento de cada etapa. Dessa forma, a IA contribuiu para o desenvolvimento do projeto, mas a análise crítica e a validação dos resultados continuaram sendo fundamentais.