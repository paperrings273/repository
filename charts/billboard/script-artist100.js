var tabelaDados = [
  { posicao: 1, artista: "Even Grace", imagem: "https://i.imgur.com/lhOrAtx.jpeg" },
  { posicao: 2, artista: "Blair", imagem: "https://i.imgur.com/kBajrdX.jpeg" },
  { posicao: 3, artista: "Ava", imagem: "https://i.imgur.com/egopiOi.jpeg" },
  { posicao: 4, artista: "Owen Graham", imagem: "https://64.media.tumblr.com/a3d3123256590e196b8fea78bf800f65/80248a6da0af5e42-97/s1280x1920/355950a055aee05bfa09d0fe2cf9455c7192a4e4.jpg" },
  { posicao: 5, artista: "Ivy Sinclair", imagem: "https://i.imgur.com/tzdo6NG.png" },
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
