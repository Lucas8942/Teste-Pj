// Função para processar os dados importados
function processarDados(rotas) {
    const resumo = {};

    // Agrupar pacotes por rota
    rotas.forEach(item => {
        if (!resumo[item.rota]) resumo[item.rota] = 0;
        resumo[item.rota]++;
    });

    // Exibir na tabela
    const tbody = document.querySelector("#rotaTable tbody");
    tbody.innerHTML = "";
    Object.keys(resumo).forEach(rota => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${rota}</td><td>${resumo[rota]}</td>`;
        tbody.appendChild(tr);
    });
}

// Importar arquivo JSON
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
