// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  {
    posicao: 1,
    musica: "Eyes On Me",
    artista: "Aria",
    imagem:
    "https://i.imgur.com/ELHgJyO.png"
  },

  {
    posicao: 2,
    musica: "Forbidden",
    artista: "Aroon",
    imagem:
    "https://i.imgur.com/qzmaAiH.png"
  },

  {
    posicao: 3,
    musica: "Soul For My Love",
    artista: "Ava",
    imagem:
    "https://i.imgur.com/GSbs5fC.png"
  },

  { posicao: 4,
    musica: "20",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/fGm30Zb.png"
  },

  {
    posicao: 5,
    musica: "Inner Self",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/5kfkjb9.png"
  },

  {
    posicao: 6,
    musica: "feel like sheet",
    artista: "Ivy Sinclair",
    imagem:
    "https://i.imgur.com/x4b7aGQ.png"
  },

  {
    posicao: 7,
    musica: "Feeling",
    artista: "Ava",
    imagem:
      "https://i.imgur.com/GSbs5fC.png"
  },

  {
    posicao: 8,
    musica: "Pleasure Addiction",
    artista: "Aroon",
    imagem:
    "https://i.imgur.com/auFxTDG.png"
  },

  {
    posicao: 9,
    musica: "Beetlebum",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/JLpdpYv.png"
  },

  { posicao: 10,
    musica: "soul",
    artista: "Anthony",
    imagem:
    "https://i.imgur.com/YPbjHzk.png"
  },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado) {
    var posicaoCell = document.getElementById("pos" + dado.posicao);
    var imagemCell = document.getElementById("imagem" + dado.posicao);
    var musicaCell = document.getElementById("song" + dado.posicao);
    var artistaCell = document.getElementById("artist" + dado.posicao);

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
