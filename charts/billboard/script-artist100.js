var tabelaDados = [
  { posicao: 1, artista: "Eric", imagem: "https://i.imgur.com/jzDTON7.jpeg" },
  { posicao: 2, artista: "Ava", imagem: "https://i.imgur.com/egopiOi.jpeg" },
  { posicao: 3, artista: "Phoebe", imagem: "https://i.imgur.com/cmZsmCG.jpeg" },
  { posicao: 4, artista: "Riley", imagem: "https://i.imgur.com/AwvL6eh.jpeg" },
  { posicao: 5, artista: "Liz", imagem: "https://i.imgur.com/sjt5v6S.png" },
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
