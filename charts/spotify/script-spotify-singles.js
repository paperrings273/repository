var tabelaDados = [
  {
    posicao: 1,
    musica: "Stolen",
    artista: "Owen Graham"
  },

  {
    posicao: 2,
    musica: "Overthinking",
    artista: "Harper"
  },

  {
    posicao: 3,
    musica: "Rumors",
    artista: "Owen Graham",
  },

  {
    posicao: 4,
    musica: "Bloodsucker",
    artista: "Ava"
  },

  {
   posicao: 5,
   musica: "The Suburbs",
   artista: "Even Grace"
},

  {
    posicao: 6,
    musica: "Salute",
    artista: "4Music"
  },

  {
    posicao: 7,
    musica: "Goodbye Jimmy",
    artista: "Even Grace"
  },

  {
    posicao: 8,
    musica: "Beetlebum",
    artista: "Even Grace"
  },

  {
    posicao: 9,
    musica: "Wings",
    artista: "4Music"
  },

  {
    posicao: 10,
    musica: "Memories From Home",
    artista: "Conan Woolridge"
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
