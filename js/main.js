// Gera as rotas de A-1 até M-16
function gerarRotas() {
    const letras = "ABCDEFGHIJKLM".split("");
    const rotas = [];
    letras.forEach(letra => {
        for (let i = 1; i <= 16; i++) {
            rotas.push(`${letra}-${i}`);
        }
    });
    return rotas;
}

// Exibe a tabela inicial
function montarTabela() {
    const tbody = document.querySelector("#rotaTable tbody");
    tbody.innerHTML = "";
    const rotas = gerarRotas();
    rotas.forEach(rota => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${rota}</td><td id="${rota.replace("-", "_")}">0</td>`;
        tbody.appendChild(tr);
    });
}

// Atualiza contagem de pacotes com base no JSON importado
function processarDados(dados) {
    const contagem = {};

    dados.forEach(item => {
        const rota = item.rota.toUpperCase();
        if (!contagem[rota]) contagem[rota] = 0;
        contagem[rota]++;
    });

    Object.keys(contagem).forEach(rota => {
        const celula = document.getElementById(rota.replace("-", "_"));
        if (celula) {
            celula.textContent = contagem[rota];
        }
    });
}

// Lê o arquivo JSON
document.getElementById("importFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);
            processarDados(dados);
        } catch (err) {
            alert("Erro ao ler o arquivo. Certifique-se de que é um JSON válido.");
        }
    };
    reader.readAsText(file);
});

// Inicializa a tabela ao carregar
montarTabela();
