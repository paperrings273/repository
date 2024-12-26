var tabelaDados = [
  { posicao: 1, album: "HONEY", artista: "Bianca" },
  { posicao: 2, album: "Overgrown", artista: "Eric"},
  { posicao: 3, album: "The Drive", artista: "Ava" },
  { posicao: 4, album: "Poets Can't Be Murdered", artista: "Trevor" },
  { posicao: 5, album: "Dandelions", artista: "Riley" },
  { posicao: 6, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 7, album: "Dreamscape (Deluxe)", artista: "Aria" },
  { posicao: 8, album: "Salute", artista: "4Music" },
  { posicao: 9, album: "Blackout", artista: "Kadu" },
  { posicao: 10, album: "Metamorphosis", artista: "Nate" },
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
