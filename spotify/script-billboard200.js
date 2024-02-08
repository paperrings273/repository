var tabelaDados = [
  { posicao: 1, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 2, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 3, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 4, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 5, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 6, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 7, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 8, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 9, album: "Nome do álbum", artista: "Nome do artista" },
  { posicao: 10, album: "Nome do álbum", artista: "Nome do artista" },
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
