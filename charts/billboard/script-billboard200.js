var tabelaDados = [
  { posicao: 1, album: "HONEY", artista: "Bianca" },
  { posicao: 2, album: "SUMMER REMAINS", artista: "Nate"},
  { posicao: 3, album: "Dreamscape", artista: "Aria" },
  { posicao: 4, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 5, album: "Dandelions", artista: "Riley" },
  { posicao: 6, album: "The Drive", artista: "Ava" },
  { posicao: 7, album: "Salute", artista: "4Music" },
  { posicao: 8, album: "What Ever Happened?", artista: "Even Grace" },
  { posicao: 9, album: "Once Upon a Time...", artista: "Conan Woolridge" },
  { posicao: 10, album: "Overgrown", artista: "Eric" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("pos" + (index + 1));
    var albumCell = document.getElementById("album" + (index + 1));
    var artistaCell = document.getElementById("artist" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    albumCell.textContent = dado.album;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

// Chama a função para atualizar a tabela automaticamente
atualizarAutomaticamente();
