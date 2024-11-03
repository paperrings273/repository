var tabelaDados = [
  {
    posicao: 1,
    musica: "Oh, Was That Yours?",
    artista: "Ava"
  },

  {
    posicao: 2,
    musica: "Late Night Talking",
    artista: "Eric, Liz"
  },

  {
    posicao: 3,
    musica: "Stronger Than Love",
    artista: "Aria, Trevor",
  },

  {
    posicao: 4,
    musica: "AFTERMATH",
    artista: "Alana Grace"
  },

  {
   posicao: 5,
   musica: "TEXAS ON FIRE",
   artista: "Hannah"
},

  {
    posicao: 6,
    musica: "Word Up!",
    artista: "4Music"
  },

  {
    posicao: 7,
    musica: "Over Those Hills",
    artista: "Trevor"
  },

  {
    posicao: 8,
    musica: "Wings",
    artista: "4Music"
  },

  {
    posicao: 9,
    musica: "La La La",
    artista: "B2B"
  },

  {
    posicao: 10,
    musica: "Ur So Lesbian",
    artista: "Ava"
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
