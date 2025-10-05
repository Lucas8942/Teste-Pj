// Dados simulados
const rotas = [
    { br: "BR15", rota: "A-1", pacote: 1 },
    { br: "BR15", rota: "A-1", pacote: 2 },
    { br: "BR15", rota: "A-2", pacote: 1 },
    { br: "BR16", rota: "B-1", pacote: 1 },
];

// Função para preencher tabela
function carregarTabela() {
    const tbody = document.querySelector("#rotaTable tbody");
    tbody.innerHTML = "";
    rotas.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.br}</td><td>${item.rota}</td><td>${item.pacote}</td>`;
        tbody.appendChild(tr);
    });
}

// Exportar BRS (simulado)
document.getElementById("exportBtn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rotas, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "brs_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

carregarTabela();
