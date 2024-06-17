var tabelaDados = [
  { posicao: 1, album: "Forbidden Whispers", artista: "Conan Woolridge" },
  { posicao: 2, album: "Dreamscape", artista: "Aria"},
  { posicao: 3, album: "KIDS SEE GHOSTS", artista: "Trevor" },
  { posicao: 4, album: "What Ever Happened?", artista: "Even Grace" },
  { posicao: 5, album: "House Of The Rising Sun", artista: "Ava" },
  { posicao: 6, album: "i owe it to myself", artista: "Owen Graham" },
  { posicao: 7, album: "side-eyed means", artista: "Logan" },
  { posicao: 8, album: "Purple Dream", artista: "Even Grace" },
  { posicao: 9, album: "Confessions Of A Broken Heart (Deluxe)", artista: "Fiona" },
  { posicao: 10, album: "Gone Now", artista: "Even Grace" },
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
