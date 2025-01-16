var tabelaDados = [
  { posicao: 1, musica: "SOFTLY, FOREVER", artista: "Bianca", imagem: "" },
  { posicao: 2, musica: "HIGHWAY BOYS", artista: "Nate", imagem: "" },
  { posicao: 3, musica: "All Over Again... Again", artista: "Ava", imagem: "" },
  { posicao: 4, musica: "By My Side", artista: "Aria ft. Miles Carson", imagem: "" },
  { posicao: 5, musica: "Crimson", artista: "Riley", imagem: "" },
  { posicao: 6, musica: "Dilemma", artista: "Aria ft. Zara", imagem: "" },
  { posicao: 7, musica: "Don't Plat Me", artista: "Aria ft. Even Grace", imagem: "" },
  { posicao: 8, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 9, musica: "Farewell", artista: "Aria", imagem: "" },
  { posicao: 10, musica: "Hearthous", artista: "Riley", imagem: "" },
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

atualizarAutomaticamente();
