var tabelaDados = [
  { posicao: 1, musica: "Move", artista: "4Music", imagem: "" },
  { posicao: 2, musica: "Stolen", artista: "Owen Graham", imagem: "" },
  { posicao: 3, musica: "AFTERMATH", artista: "Alana Grace", imagem: "" },
  { posicao: 4, musica: "Salute", artista: "4Music", imagem: "" },
  { posicao: 5, musica: "Wings", artista: "4Music", imagem: "" },
  { posicao: 6, musica: "Little Me", artista: "4Music", imagem: "" },
  { posicao: 7, musica: "DNA", artista: "4Music", imagem: "" },
  { posicao: 8, musica: "Overthinking", artista: "Harper", imagem: "" },
  { posicao: 9, musica: "Change Your Life", artista: "4Music", imagem: "" },
  { posicao: 10, musica: "Dilemma", artista: "4Music", imagem: "" },
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
