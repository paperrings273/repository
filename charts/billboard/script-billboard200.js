var tabelaDados = [
  { posicao: 1, album: "Dandelions", artista: "Riley" },
  { posicao: 2, album: "The Drive", artista: "Ava"},
  { posicao: 3, album: "Dreamscape (Deluxe)", artista: "Aria" },
  { posicao: 4, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 5, album: "Overgrown", artista: "Eric" },
  { posicao: 6, album: "VANGUARD", artista: "Hannah" },
  { posicao: 7, album: "Forbidden Whispers (Live On Lost & Found Tour)", artista: "Conan Woolridge" },
  { posicao: 8, album: "Salute (Deluxe)", artista: "4Music" },
  { posicao: 9, album: "Poets Can't Be Murdered", artista: "Trevor" },
  { posicao: 10, album: "MELANCHOLIA", artista: "Alana Grace" },
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
