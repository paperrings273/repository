var tabelaDados = [
  { posicao: 1, album: "HONEY", artista: "Bianca" },
  { posicao: 2, album: "Overgrown", artista: "Eric"},
  { posicao: 3, album: "SUMMER REMAINS", artista: "Nate" },
  { posicao: 4, album: "Once Upon a Time...", artista: "Conan Woolridge" },
  { posicao: 5, album: "Dreamscape", artista: "Aria" },
  { posicao: 6, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 7, album: "Dandelions", artista: "Riley" },
  { posicao: 8, album: "The Drive", artista: "Ava" },
  { posicao: 9, album: "Salute", artista: "4Music" },
  { posicao: 10, album: "What Ever Happened?", artista: "Even Grace" },
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
