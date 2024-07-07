var tabelaDados = [
  { posicao: 1, album: "What Ever Happened?", artista: "Even Grace" },
  { posicao: 2, album: "Forbidden Whispers", artista: "Conan Woolridge"},
  { posicao: 3, album: "Dreamscape", artista: "Aria" },
  { posicao: 4, album: "Before Sunrise (Original Motion Picture Soundtrack)", artista: "Conan Woolridge, Fiona" },
  { posicao: 5, album: "Purple Dream", artista: "Even Grace" },
  { posicao: 6, album: "House Of The Rising Sun", artista: "Ava" },
  { posicao: 7, album: "i owe it to myself", artista: "Owen Graham" },
  { posicao: 8, album: "KIDS SEE GHOSTS", artista: "Trevor" },
  { posicao: 9, album: "Gone Now", artista: "Even Grace" },
  { posicao: 10, album: "I Really Don't Wanna Hear It Anymore", artista: "Holligan" },
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
