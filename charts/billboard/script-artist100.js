var tabelaDados = [
  { posicao: 1, artista: "Bianca", imagem: "https://i.imgur.com/zL5EcUA.jpeg" },
  { posicao: 2, artista: "Nate", imagem: "https://i.imgur.com/HU0h3oo.jpeg" },
  { posicao: 3, artista: "Aria", imagem: "https://i.imgur.com/1cQsduv.png" },
  { posicao: 4, artista: "Hannah", imagem: "https://graziamagazine.com/us/wp-content/uploads/sites/15/2022/07/Beyonce-Renaissance-12.jpeg" },
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
