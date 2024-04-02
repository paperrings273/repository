var tabelaDados = [
  { posicao: 1, album: "House Of The Rising Sun", artista: "Ava" },
  { posicao: 2, album: "KIDS SEE GHOSTS", artista: "Trevor"},
  { posicao: 3, album: "meaningless", artista: "Anthony" },
  { posicao: 4, album: "EVERYTHING IS FREEDOM", artista: "Trevor" },
  { posicao: 5, album: "Confessions Of A Broken Heart (Deluxe)", artista: "Fiona" },
  { posicao: 6, album: "The Life Of Greg", artista: "Trevor" },
  { posicao: 7, album: "HEARTACHE", artista: "Trevor" },
  { posicao: 8, album: "i owe it to myself", artista: "Owen Graham" },
  { posicao: 9, album: "When I Get Lost", artista: "Conan Woolridge" },
  { posicao: 10, album: "everlasting", artista: "Liz" },
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
