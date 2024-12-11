var tabelaDados = [
  { posicao: 1, musica: "Heart-to-Heart", artista: "Conan Woolridge", imagem: "" },
  { posicao: 2, musica: "Don't Play Me", artista: "Aria & Even Grace", imagem: "" },
  { posicao: 3, musica: "Young Night", artista: "Zuri & Riley", imagem: "" },
  { posicao: 4, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 5, musica: "Remains For Us", artista: "Riley", imagem: "" },
  { posicao: 6, musica: "Crimson", artista: "Riley", imagem: "" },
  { posicao: 7, musica: "Let It Go", artista: "Riley", imagem: "" },
  { posicao: 8, musica: "Farewell", artista: "Aria", imagem: "" },
  { posicao: 9, musica: "ALL AMERICAN", artista: "Hannah", imagem: "" },
  { posicao: 10, musica: "I Got The Power", artista: "4Music & Miles Carson", imagem: "" },
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
