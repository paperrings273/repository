var tabelaDados = [
  { posicao: 1, album: "Reflections", artista: "Ivy Sinclair"},
  { posicao: 2, album: "Overgrown", artista: "Eric" },
  { posicao: 3, album: "HONEY", artista: "Bianca" },
  { posicao: 4, album: "Even After All", artista: "Even Grace" },
  { posicao: 5, album: "Don't Tell Your Friends", artista: "Bianca" },
  { posicao: 6, album: "When I Open My Eyes", artista: "Bianca" },
  { posicao: 7, album: "Alone In Days Like This", artista: "Bianca" },
  { posicao: 8, album: "SUMMER REMAINS", artista: "Nate" },
  { posicao: 9, album: "Once Upon a Time...", artista: "Conan Woolridge" },
  { posicao: 10, album: "The Drive", artista: "Ava" },
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
