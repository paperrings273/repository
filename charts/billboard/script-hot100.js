var tabelaDados = [
  { posicao: 1, musica: "King Cry-Baby (A-Remix)", artista: "Kadu ft. Liza & Nate", imagem: "" },
  { posicao: 2, musica: "Chasing Freedom", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 3, musica: "Late Night Talking", artista: "Eric ft. Liz", imagem: "" },
  { posicao: 4, musica: "HIGHWAY BOYS", artista: "Nate", imagem: "" },
  { posicao: 5, musica: "HONEY", artista: "Bianca", imagem: "" },
  { posicao: 6, musica: "Oh, Was That Yours?", artista: "Ava", imagem: "" },
  { posicao: 7, musica: "hit-and-run", artista: "Suzy", imagem: "" },
  { posicao: 8, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 9, musica: "SOFTLY, FOREVER", artista: "Bianca", imagem: "" },
  { posicao: 10, musica: "Bloodsucker", artista: "Ava", imagem: "" },
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
