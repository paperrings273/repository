var tabelaDados = [
  { posicao: 1, musica: "RADICAL EXXXTASY", artista: "Even Grace", imagem: "" },
  { posicao: 2, musica: "SOFTLY, FOREVER", artista: "Bianca", imagem: "" },
  { posicao: 3, musica: "Heart-to-Heart", artista: "Conan Woolridge", imagem: "" },
  { posicao: 4, musica: "HIGHWAY BOYS", artista: "Nate", imagem: "" },
  { posicao: 5, musica: "King Cry-Baby (A-Remix)", artista: "Kadu ft. Liza & Nate", imagem: "" },
  { posicao: 6, musica: "All Over Again... Again", artista: "Ava", imagem: "" },
  { posicao: 7, musica: "By My Side", artista: "Aria ft. Miles Carson", imagem: "" },
  { posicao: 8, musica: "Crimson", artista: "Riley", imagem: "" },
  { posicao: 9, musica: "Dilemma", artista: "Aria ft. Zara", imagem: "" },
  { posicao: 10, musica: "Don't Play Me", artista: "Aria ft. Even Grace", imagem: "" },
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
