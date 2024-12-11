var tabelaDados = [
  { posicao: 1, artista: "Riley", imagem: "https://i.imgur.com/hGPOW5T.jpeg" },
  { posicao: 2, artista: "Aria", imagem: "https://i.imgur.com/qdDa1Fj.jpeg" },
  { posicao: 3, artista: "Conan Woolridge", imagem: "https://i.imgur.com/M6Psaik.png" },
  { posicao: 4, artista: "Ava", imagem: "https://i.imgur.com/egopiOi.jpeg" },
  { posicao: 5, artista: "Zuri", imagem: "https://i.imgur.com/tipsGyO.png" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("pos" + (index + 1));
    var imagemCell = document.getElementById("imagem" + (index + 1));
    var artistaCell = document.getElementById("artist" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

atualizarAutomaticamente();
