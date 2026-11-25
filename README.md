# Projeto Integrador de Ciência de Dados — Port Alder

Projeto desenvolvido para analisar o desempenho do setor hoteleiro da cidade fictícia de Port Alder, utilizando técnicas de Ciência de Dados para identificar padrões de ocupação, preços, receitas e avaliações dos hóspedes.

Os dados utilizados são sintéticos e abrangem os anos de 2027 e 2028, contemplando 14 hotéis de diferentes categorias.

## Objetivo

Transformar dados do setor hoteleiro em informações que auxiliem na compreensão do mercado e na tomada de decisões estratégicas.

## Tecnologias utilizadas

- **Python:** linguagem utilizada para análise e processamento dos dados.
- **Pandas e NumPy:** manipulação e análise estatística.
- **Matplotlib e Seaborn:** criação de visualizações.
- **Plotly:** gráficos interativos.
- **SQLite:** armazenamento e consultas ao banco de dados.
- **HTML, CSS e JavaScript:** desenvolvimento do dashboard.
- **Jupyter Notebook:** documentação e execução das análises.
- **Inteligência Artificial:** apoio ao desenvolvimento, revisão de códigos e construção de soluções.

## Estrutura do projeto

```text
projeto-integrador-ciencia-de-dados/
│
├── dados/                  # Arquivos originais do projeto
├── notebooks/              # Notebooks das etapas de análise
├── banco/                  # Banco SQLite e documentação
├── dashboard/              # Dashboard interativo
├── diario_de_bordo/        # Registros do desenvolvimento
├── diario_de_campo.md      # Registro do uso da IA
├── relatório/              # Relatório executivo
├── apresentacao/           # Apresentação final
└── README.md               # Documentação principal
```

## Etapas desenvolvidas

1. **Exploração e preparação:** carregamento dos arquivos, inspeção das tabelas e análise da qualidade dos dados.
2. **Análise estatística:** comparação entre categorias, sazonalidade, eventos, correlações e projeções.
3. **Banco de dados:** modelagem relacional, implementação em SQLite e consultas SQL.
4. **Visualização:** desenvolvimento de gráficos para representar os principais resultados.
5. **Dashboard:** criação de um painel interativo com indicadores, gráficos e filtros.
6. **Documentação:** diário de bordo, diário de campo, relatório executivo e apresentação final.

## Como acessar o projeto

### Notebooks

Acesse a pasta `notebooks/` e abra os arquivos `.ipynb` utilizando Jupyter Notebook ou VS Code.

Os notebooks estão organizados conforme as etapas de desenvolvimento.

### Banco de dados

O banco de dados SQLite está disponível na pasta `banco/`.

Pode ser consultado por ferramentas compatíveis com SQLite.

### Dashboard

Acesse a pasta `dashboard/`.

Para executar localmente, abra um terminal na pasta principal do projeto e execute:

```bash
python -m http.server 8000 --directory dashboard
```

Depois, abra no navegador:

```text
http://localhost:8000
```

### Relatório e apresentação

Os materiais finais estão disponíveis nas pastas `relatório/` e `apresentacao/`.

### Diários

- `diario_de_bordo/`: registros das atividades e do desenvolvimento.
- `diario_de_campo.md`: documentação dos prompts, erros, aprendizados e reflexão sobre o uso da inteligência artificial.

## Observações

Os dados utilizados são sintéticos. Portanto, os resultados representam o cenário fictício de Port Alder e não devem ser interpretados como indicadores reais do mercado hoteleiro.

As projeções para 2029 são estimativas baseadas em tendências lineares dos dados históricos de 2027 e 2028, apresentando limitações que devem ser consideradas.

## Autoria

Projeto Integrador de Ciência de Dados — desenvolvido por Luiza Veber Moreira.