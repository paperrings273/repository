var tabelaDados = [
  {
    posicao: 1,
    musica: "The Suburbs",
    artista: "Even Grace"
  },

  {
    posicao: 2,
    musica: "Bloodsucker",
    artista: "Ava"
  },

  {
    posicao: 3,
    musica: "Be Alive",
    artista: "Fiona",
  },

  {
    posicao: 4,
    musica: "In Case I Don't Live Forever",
    artista: "Conan Woolridge"
  },

  {
   posicao: 5,
   musica: "Rumors",
   artista: "Owen Graham"
},

  {
    posicao: 6,
    musica: "Alone in Kyoto",
    artista: "Even Grace"
  },

  {
    posicao: 7,
    musica: "Soul For My Love",
    artista: "Ava"
  },

  {
    posicao: 8,
    musica: "Beetlebum",
    artista: "Even Grace"
  },

  {
    posicao: 9,
    musica: "Goodbye Jimmy",
    artista: "Even Grace"
  },

  {
    posicao: 10,
    musica: "Hang the DJ!",
    artista: "Even Grace"
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
