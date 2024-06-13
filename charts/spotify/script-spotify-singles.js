var tabelaDados = [
  {
    posicao: 1,
    musica: "Bloodsucker",
    artista: "Ava",
    imagem:
    "https://i.imgur.com/n3DwAZF.png"
  },

  {
    posicao: 2,
    musica: "Rumors",
    artista: "Owen Graham",
    imagem:
      "https://i.imgur.com/dhc5YTC.jpg"
  },

  {
    posicao: 3,
    musica: "Salute",
    artista: "4Music",
    imagem:
      "https://i.imgur.com/oxCDtRj.jpeg"
  },

  {
    posicao: 4,
    musica: "Dilemma",
    artista: "Aria, Zara",
    imagem:
      "https://i.imgur.com/YOeKr4e.png"
  },

  {
   posicao: 5,
   musica: "Memories From Home",
   artista: "Conan Woolridge",
   imagem:
     "https://i.imgur.com/CG7Am2k.png"
},

  {
    posicao: 6,
    musica: "Eyes On Me",
    artista: "Aria",
    imagem:
      "https://i.imgur.com/WGgEXJ4.png"
  },

  {
    posicao: 7,
    musica: "The Suburbs",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/YOeKr4e.png"
  },

  {
    posicao: 8,
    musica: "Stronger Than Love",
    artista: "Aria, Trevor",
    imagem:
      "https://i.imgur.com/UP6Su3j.png"
  },

  {
    posicao: 9,
    musica: "Father Sins",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/G1dG97H.png"
  },

  {
    posicao: 10,
    musica: "20",
    artista: "Conan Woolridge",
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
    imagemCell.src = linksImagens[dado.musica + " - " + dado.artista];
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

function atualizarTop1() {
  var top1 = tabelaDados[0];
  var chaveImagem = top1.musica + " - " + top1.artista;

  var sections = document.querySelectorAll(".section");

  sections.forEach(function(section) {
    var logo = section.querySelector(".logo");
    var albumCover = section.querySelector(".album-cover");
    var musicTitle = section.querySelector(".music-title");
    var artistName = section.querySelector(".artist-name");
    var position = section.querySelector(".top1-number");

    albumCover.src = linksImagens[chaveImagem];
    musicTitle.textContent = top1.musica;
    artistName.textContent = top1.artista;
    position.textContent = "#" + top1.posicao;
  });
}

atualizarTabela();
atualizarTop1();
