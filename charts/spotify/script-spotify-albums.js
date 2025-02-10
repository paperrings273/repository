// artist-data.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "Reflections",
    artista: "Ivy Sinclair"
  },
  {
    posicao: 2,
    musica: "Overgrown",
    artista: "Eric"
  },
  {
    posicao: 3,
    musica: "HONEY",
    artista: "Bianca"
  },
  {
    posicao: 4,
    musica: "Even After All",
    artista: "Even Grace"
  },
  {
    posicao: 5,
    musica: "Alone In Days Like This",
    artista: "Bianca"
  },
  {
    posicao: 6,
    musica: "When I Open My Eyes",
    artista: "Bianca"
  },
  {
    posicao: 7,
    musica: "Don't Tell Your Friends",
    artista: "Bianca"
  },
  {
    posicao: 8,
    musica: "SUMMER REMAINS",
    artista: "Nate"
  },
  {
    posicao: 9,
    musica: "Once Upon a Time...",
    artista: "Conan Woolridge"
  },
  {
    posicao: 10,
    musica: "The Drive",
    artista: "Ava"
  },
];

// main.js
function obterImagemPorTituloEArtista(titulo, artistaCompleto) {
  var artistasArray = artistaCompleto.split(",").map(a => a.trim());

  var tituloSemFeat = titulo.replace(/\(feat\. [^\)]+\)/i, "").trim();

  for (var i = 0; i < albumsData.length; i++) {
    var album = albumsData[i];

    var albumTituloSemFeat = album.title.replace(/\(feat\. [^\)]+\)/i, "").trim();

    if (albumTituloSemFeat === tituloSemFeat) {
      if (artistasArray.includes(album.artist)) {
        return album.image;
      }

      for (var feat of album.featuring) {
        if (artistasArray.includes(feat)) {
          return album.image;
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
