var tabelaDados = [
  { posicao: 1, album: "HONEY", artista: "Bianca" },
  { posicao: 2, album: "The Drive", artista: "Ava"},
  { posicao: 3, album: "Dandelions", artista: "Riley" },
  { posicao: 4, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 5, album: "Overgrown", artista: "Eric" },
  { posicao: 6, album: "Liquor Store In Mars", artista: "Madeline" },
  { posicao: 7, album: "LA To The Moon", artista: "Madeline" },
  { posicao: 8, album: "Dreamscape (Deluxe)", artista: "Aria" },
  { posicao: 9, album: "Poets Can't Be Murdered", artista: "Trevor" },
  { posicao: 10, album: "VANGUARD", artista: "Hannah" },
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
