var tabelaDados = [
  { posicao: 1, artista: "Nate", imagem: "https://i.imgur.com/HU0h3oo.jpeg" },
  { posicao: 2, artista: "Even Grace", imagem: "https://timotheechalamet.net/photos/albums/uploads/Photoshoots/2023/005/TCF-018.jpg" },
  { posicao: 3, artista: "Blair", imagem: "https://i.imgur.com/QDVtAyL.png" },
  { posicao: 4, artista: "Conan Woolridge", imagem: "https://i.imgur.com/xEcXwS9.jpeg" },
  { posicao: 5, artista: "Suzy", imagem: "https://i.imgur.com/U6D2BTO.png" },
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
