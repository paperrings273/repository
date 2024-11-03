var tabelaDados = [
  { posicao: 1, album: "The Drive", artista: "Ava" },
  { posicao: 2, album: "Overgrown", artista: "Eric"},
  { posicao: 3, album: "Salute", artista: "4Music" },
  { posicao: 4, album: "Poets Can't Be Murdered", artista: "Trevor" },
  { posicao: 5, album: "Dreamscape", artista: "Aria" },
  { posicao: 6, album: "MELANCHOLIA", artista: "Alana Grace" },
  { posicao: 7, album: "Forbidden Whispers", artista: "Conan Woolridge" },
  { posicao: 8, album: "meaningless", artista: "Anthony" },
  { posicao: 9, album: "What Ever Happened?", artista: "Even Grace" },
  { posicao: 10, album: "KIDS SEE GHOSTS", artista: "Trevor" },
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
