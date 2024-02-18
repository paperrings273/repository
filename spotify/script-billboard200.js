var tabelaDados = [
  { posicao: 1, album: "KIDS SEE GHOSTS", artista: "Trevor" },
  { posicao: 2, album: "Everything Is Freedom", artista: "Trevor" },
  { posicao: 3, album: "The Life Of Greg", artista: "Trevor" },
  { posicao: 4, album: "I owe it to myself", artista: "Owen Graham" },
  { posicao: 5, album: "Purple Dream", artista: "Even Grace" },
  { posicao: 6, album: "Pure Feeling", artista: "Liza" },
  { posicao: 7, album: "Love Signal", artista: "Zion" },
  { posicao: 8, album: "When I Get Lost", artista: "Conan Woolridge" },
  { posicao: 9, album: "Lockdown", artista: "Liz" },
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
