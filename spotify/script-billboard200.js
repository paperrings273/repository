var tabelaDados = [
  { posicao: 1, album: "Forbidden Whispers", artista: "Conan Woolridge" },
  { posicao: 2, album: "KIDS SEE GHOSTS", artista: "Trevor"},
  { posicao: 3, album: "House Of The Rising Sun", artista: "Ava" },
  { posicao: 4, album: "When I Get Lost", artista: "Conan Woolridge" },
  { posicao: 5, album: "meaningless", artista: "Anthony" },
  { posicao: 6, album: "i owe it to myself", artista: "Owen Graham" },
  { posicao: 7, album: "EVERYTHING IS FREEDOM", artista: "Trevor" },
  { posicao: 8, album: "The Life Of Greg", artista: "Trevor" },
  { posicao: 9, album: "Confessions Of A Broken Heart (Deluxe)", artista: "Fiona" },
  { posicao: 10, album: "The Little Mermaid (Original Motion Picture Soundtrack)", artista: "Various Artists" },
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
