var tabelaDados = [
  { posicao: 1, musica: "", artista: "", imagem: "" },
  { posicao: 2, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 3, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 4, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 5, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 6, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 7, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 8, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 9, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 10, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("poshot" + (index + 1));
    var imagemCell = document.getElementById("imagemhot" + (index + 1));
    var musicaCell = document.getElementById("songhot" + (index + 1));
    var artistaCell = document.getElementById("artisthot" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

// Chama a função para atualizar a tabela automaticamente
atualizarAutomaticamente();
