var tabelaDados = [
  { posicao: 1, album: "Overgrown", artista: "Eric"},
  { posicao: 2, album: "Even After All", artista: "Even Grace" },
  { posicao: 3, album: "HONEY", artista: "Bianca" },
  { posicao: 4, album: "SUMMER REMAINS", artista: "Nate" },
  { posicao: 5, album: "Once Upon a Time...", artista: "Conan Woolridge" },
  { posicao: 6, album: "THE COUNTRY CLUB", artista: "Hannah" },
  { posicao: 7, album: "The Drive", artista: "Ava" },
  { posicao: 8, album: "Dandelions", artista: "Riley" },
  { posicao: 9, album: "Salute", artista: "4Music" },
  { posicao: 10, album: "Poets Can't Be Murdered", artista: "Trevor" },
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
