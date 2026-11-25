// ==========================================
// 1. CARREGAMENTO DOS DADOS
// ==========================================

let dados = null;

async function carregarDados() {
    try {
        const resposta = await fetch("dados_dashboard.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar os dados.");
        }

        dados = await resposta.json();

        atualizarDashboard();

    } catch (erro) {
        console.error("Erro ao carregar o dashboard:", erro);
        document.getElementById("mensagemVazia").style.display = "block";
        document.getElementById("mensagemVazia").textContent =
            "Erro ao carregar os dados. Verifique se está usando um servidor local.";
    }
}


// ==========================================
// 2. APLICAR FILTROS
// ==========================================

function obterDadosFiltrados() {
    const categoria = document.getElementById("filtroCategoria").value;
    const ano = document.getElementById("filtroAno").value;

    const hoteisFiltrados = dados.hotels.filter(hotel =>
        categoria === "todas" || hotel.tier === categoria
    );

    const idsHoteis = hoteisFiltrados.map(hotel => hotel.hotel_id);

    const diariosFiltrados = dados.daily_market.filter(registro => {
        const anoRegistro = registro.date.substring(0, 4);

        return (
            idsHoteis.includes(registro.hotel_id) &&
            (ano === "todos" || anoRegistro === ano)
        );
    });

    const avaliacoesFiltradas = dados.reviews.filter(avaliacao => {
        const anoAvaliacao = avaliacao.review_date.substring(0, 4);

        return (
            idsHoteis.includes(avaliacao.hotel_id) &&
            (ano === "todos" || anoAvaliacao === ano)
        );
    });

    return {
        hoteis: hoteisFiltrados,
        diarios: diariosFiltrados,
        avaliacoes: avaliacoesFiltradas
    };
}


// ==========================================
// 3. ATUALIZAR OS INDICADORES (KPIs)
// ==========================================

function atualizarKPIs(diarios) {
    const total = diarios.length;

    if (total === 0) {
        document.getElementById("kpiOcupacao").textContent = "--";
        document.getElementById("kpiAdr").textContent = "--";
        document.getElementById("kpiRevpar").textContent = "--";
        document.getElementById("kpiReceita").textContent = "--";
        return;
    }

    const ocupacao = diarios.reduce((soma, item) =>
        soma + item.occupancy, 0) / total;

    const adr = diarios.reduce((soma, item) =>
        soma + item.adr, 0) / total;

    const revpar = diarios.reduce((soma, item) =>
        soma + item.revpar, 0) / total;

    const receita = diarios.reduce((soma, item) =>
        soma + item.room_revenue, 0);

    document.getElementById("kpiOcupacao").textContent =
        (ocupacao * 100).toFixed(1) + "%";

    document.getElementById("kpiAdr").textContent =
        adr.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("kpiRevpar").textContent =
        revpar.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("kpiReceita").textContent =
        receita.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0
        });
}


// ==========================================
// 4. GRÁFICO DE DESEMPENHO POR CATEGORIA
// ==========================================
function criarGraficoCategoria(diarios) {
    const categorias = {};

    diarios.forEach(item => {
        if (!categorias[item.tier]) {
            categorias[item.tier] = {
                ocupacao: 0,
                adr: 0,
                quantidade: 0
            };
        }

        categorias[item.tier].ocupacao += item.occupancy;
        categorias[item.tier].adr += item.adr;
        categorias[item.tier].quantidade++;
    });

    const nomes = Object.keys(categorias);

    const ocupacoes = nomes.map(nome =>
        categorias[nome].ocupacao /
        categorias[nome].quantidade * 100
    );

    const adrs = nomes.map(nome =>
        categorias[nome].adr /
        categorias[nome].quantidade
    );

    const grafico = [
        {
            x: nomes,
            y: ocupacoes,
            name: "Ocupação (%)",
            type: "bar"
        },
        {
            x: nomes,
            y: adrs,
            name: "ADR (R$)",
            type: "scatter",
            mode: "lines+markers",
            yaxis: "y2"
        }
    ];

    Plotly.newPlot("graficoCategoria", grafico, {
        yaxis: { title: "Ocupação (%)" },
        yaxis2: {
            title: "ADR (R$)",
            overlaying: "y",
            side: "right"
        },
        margin: { t: 20, b: 70, l: 50, r: 60 },
        legend: { orientation: "h", y: -0.25 },
        autosize: true
    }, { responsive: true });
}

// ==========================================
// 5. GRÁFICO DE EVOLUÇÃO MENSAL
// ==========================================

function criarGraficoMensal(diarios) {
    const meses = {};

    diarios.forEach(item => {
        const mes = item.date.substring(0, 7);

        if (!meses[mes]) {
            meses[mes] = {
                ocupacao: 0,
                quantidade: 0
            };
        }

        meses[mes].ocupacao += item.occupancy;
        meses[mes].quantidade++;
    });

    const datas = Object.keys(meses).sort();

    const valores = datas.map(mes =>
        meses[mes].ocupacao /
        meses[mes].quantidade * 100
    );

    Plotly.newPlot("graficoMensal", [{
        x: datas,
        y: valores,
        type: "scatter",
        mode: "lines+markers",
        name: "Ocupação média"
    }], {
        yaxis: { title: "Ocupação (%)" },
        xaxis: { title: "Mês" },
        margin: { t: 20, b: 60, l: 55, r: 20 },
        autosize: true
    }, { responsive: true });
}


// ==========================================
// 6. GRÁFICO DE AVALIAÇÕES
// ==========================================

function criarGraficoAvaliacoes(avaliacoes) {
    const sentimentos = {
        positive: 0,
        neutral: 0,
        negative: 0
    };

    avaliacoes.forEach(item => {
        if (sentimentos[item.sentiment] !== undefined) {
            sentimentos[item.sentiment]++;
        }
    });

    Plotly.newPlot("graficoAvaliacoes", [{
        labels: ["Positivas", "Neutras", "Negativas"],
        values: [
            sentimentos.positive,
            sentimentos.neutral,
            sentimentos.negative
        ],
        type: "pie",
        hole: 0.45
    }], {
        margin: { t: 20, b: 20, l: 20, r: 20 },
        showlegend: true
    }, { responsive: true });
}


// ==========================================
// 7. PREENCHER TABELA DOS HOTÉIS
// ==========================================

function atualizarTabela(hoteis, diarios) {
    const tabela = document.getElementById("tabelaHoteis");
    const mensagem = document.getElementById("mensagemVazia");

    tabela.innerHTML = "";

    if (diarios.length === 0) {
        mensagem.style.display = "block";
        return;
    }

    mensagem.style.display = "none";

    hoteis.forEach(hotel => {
        const registros = diarios.filter(item =>
            item.hotel_id === hotel.hotel_id
        );

        if (registros.length === 0) return;

        const quantidade = registros.length;

        const ocupacao = registros.reduce((soma, item) =>
            soma + item.occupancy, 0) / quantidade;

        const adr = registros.reduce((soma, item) =>
            soma + item.adr, 0) / quantidade;

        const revpar = registros.reduce((soma, item) =>
            soma + item.revpar, 0) / quantidade;

        const receita = registros.reduce((soma, item) =>
            soma + item.room_revenue, 0);

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${hotel.name}</td>
            <td>${hotel.tier}</td>
            <td>${(ocupacao * 100).toFixed(1)}%</td>
            <td>${adr.toFixed(2)}</td>
            <td>${revpar.toFixed(2)}</td>
            <td>${receita.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0
            })}</td>
        `;

        tabela.appendChild(linha);
    });
}


// ==========================================
// 8. ATUALIZAR TODO O DASHBOARD
// ==========================================

function atualizarDashboard() {
    const filtrados = obterDadosFiltrados();

    atualizarKPIs(filtrados.diarios);

    criarGraficoCategoria(filtrados.diarios);

    criarGraficoMensal(filtrados.diarios);

    criarGraficoAvaliacoes(filtrados.avaliacoes);

    atualizarTabela(filtrados.hoteis, filtrados.diarios);
}


// ==========================================
// 9. EVENTOS DOS FILTROS
// ==========================================

document.getElementById("filtroCategoria")
    .addEventListener("change", atualizarDashboard);

document.getElementById("filtroAno")
    .addEventListener("change", atualizarDashboard);


// ==========================================
// 10. INICIAR O DASHBOARD
// ==========================================

carregarDados();