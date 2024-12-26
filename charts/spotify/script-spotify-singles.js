var tabelaDados = [
  {
    posicao: 1,
    musica: "King Cry-Baby (A-Remix)",
    artista: "Kadu, Liza, Nate"
  },

  {
    posicao: 2,
    musica: "Chasing Freedom",
    artista: "Ivy Sinclair"
  },

  {
    posicao: 3,
    musica: "Late Night Talking",
    artista: "Eric, Liz",
  },

  {
    posicao: 4,
    musica: "SOFTLY, FOREVER",
    artista: "Bianca"
  },

  {
   posicao: 5,
   musica: "hit-and-run",
   artista: "Suzy"
},

  {
    posicao: 6,
    musica: "HIGHWAY BOYS",
    artista: "Nate"
  },

  {
    posicao: 7,
    musica: "HONEY",
    artista: "Bianca"
  },

  {
    posicao: 8,
    musica: "Oh, Was That Yours?",
    artista: "Ava"
  },

  {
    posicao: 9,
    musica: "Heart-to-Heart",
    artista: "Conan Woolridge"
  },

  {
    posicao: 10,
    musica: "DRUNK!",
    artista: "Ava"
  },
];

function obterImagemPorTituloEArtista(titulo, artistaCompleto) {
  var artistasArray = artistaCompleto.split(",").map(a => a.trim());

  var tituloSemFeat = titulo.replace(/\(feat\. [^\)]+\)/i, "").trim();

  for (var i = 0; i < singlesData.length; i++) {
    var single = singlesData[i];

    var singleTituloSemFeat = single.title.replace(/\(feat\. [^\)]+\)/i, "").trim();

    if (singleTituloSemFeat === tituloSemFeat) {
      if (artistasArray.includes(single.artist)) {
        return single.image;
      }

      for (var feat of single.featuring) {
        if (artistasArray.includes(feat)) {
          return single.image;
        }
      }
    }
  }
  return "";
}

function atualizarTabela() {
  tabelaDados.forEach(function(dado) {
    var posicaoCell = document.getElementById("pos" + dado.posicao);
    var imagemCell = document.getElementById("imagem" + dado.posicao);
    var musicaCell = document.getElementById("song" + dado.posicao);
    var artistaCell = document.getElementById("artist" + dado.posicao);

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = obterImagemPorTituloEArtista(dado.musica, dado.artista);
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

function atualizarTop1() {
  var top1 = tabelaDados[0];
  var sections = document.querySelectorAll(".section");

  sections.forEach(function(section) {
    var logo = section.querySelector(".logo");
    var albumCover = section.querySelector(".album-cover");
    var musicTitle = section.querySelector(".music-title");
    var artistName = section.querySelector(".artist-name");
    var position = section.querySelector(".top1-number");

    albumCover.src = obterImagemPorTituloEArtista(top1.musica, top1.artista);
    musicTitle.textContent = top1.musica;
    artistName.textContent = top1.artista;
    position.textContent = "#" + top1.posicao;
  });
}

atualizarTabela();
atualizarTop1();

