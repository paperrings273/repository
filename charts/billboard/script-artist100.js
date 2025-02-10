var tabelaDados = [
  { posicao: 1, artista: "Eric", imagem: "https://i.imgur.com/5tMDqG7.png" },
  { posicao: 2, artista: "Ivy Sinclair", imagem: "https://i.imgur.com/tzdo6NG.png" },
  { posicao: 3, artista: "Even Grace", imagem: "https://i.imgur.com/lhOrAtx.jpeg" },
  { posicao: 4, artista: "Bianca", imagem: "https://i.imgur.com/zL5EcUA.jpeg" },
  { posicao: 5, artista: "Ava", imagem: "https://i.imgur.com/egopiOi.jpeg" },
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
