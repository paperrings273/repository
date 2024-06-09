var tabelaDados = [
  {
    posicao: 1,
    musica: "Dilemma",
    artista: "Aria, Zara",
    imagem:
    "https://i.imgur.com/aM2OuX9.png"
  },

  {
    posicao: 2,
    musica: "Boom",
    artista: "Aria, Liza, Hannah",
    imagem:
      "https://i.imgur.com/aM2OuX9.png"
  },

  {
    posicao: 3,
    musica: "Memories From Home",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/WGgEXJ4.png"
  },

  {
    posicao: 4,
    musica: "The Suburbs",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/4UxqnEn.png"
  },

  {
   posicao: 5,
   musica: "When The Party's Over",
   artista: "Fiona",
   imagem:
     "https://i.imgur.com/CG7Am2k.png"
},

  {
    posicao: 6,
    musica: "Chamaleon's Serenade",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/WGgEXJ4.png"
  },

  {
    posicao: 7,
    musica: "Journey To You",
    artista: "Aria, Nate",
    imagem:
    "https://i.imgur.com/YOeKr4e.png"
  },

  {
    posicao: 8,
    musica: "here's to the nights",
    artista: "Liz",
    imagem:
      "https://i.imgur.com/UP6Su3j.png"
  },

  {
    posicao: 9,
    musica: "Rumors",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/G1dG97H.png"
  },

  {
    posicao: 10,
    musica: "Stained",
    artista: "Glenda",
    imagem:
    "https://i.imgur.com/KVrGgpt.png"
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
