var tabelaDados = [
  {
    posicao: 1,
    musica: "Alone in Kyoto",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/8QfuQKE.png"
  },

  {
    posicao: 2,
    musica: "Dilemma",
    artista: "Aria, Zara",
    imagem:
      "https://i.imgur.com/YOeKr4e.png"
  },

  {
    posicao: 3,
    musica: "The Suburbs",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/8QfuQKE.png"
  },

  {
    posicao: 4,
    musica: "LA LA LA",
    artista: "B2b",
    imagem:
      "https://i.imgur.com/Jf9SRVH.jpeg"
  },

  {
   posicao: 5,
   musica: "Stronger Than Love",
   artista: "Aria, Trevor",
   imagem:
     "https://i.imgur.com/YOeKr4e.png"
},

  {
    posicao: 6,
    musica: "Memories From Home",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 7,
    musica: "Boom Boom",
    artista: "Aria, Liza, Hannah",
    imagem:
    "https://i.imgur.com/YOeKr4e.png"
  },

  {
    posicao: 8,
    musica: "Rumors",
    artista: "Owen Graham",
    imagem:
      "https://i.imgur.com/dhc5YTC.jpeg"
  },

  {
    posicao: 9,
    musica: "Inner Self",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/5kfkjb9.png"
  },

  {
    posicao: 10,
    musica: "Ava",
    artista: "Soul For My Love",
    imagem:
    "https://i.imgur.com/GSbs5fC.png"
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
