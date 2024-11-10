// artist-data.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "Overgrown",
    artista: "Eric"
  },
  {
    posicao: 2,
    musica: "The Drive",
    artista: "Ava"
  },
  {
    posicao: 3,
    musica: "Dreamscape (Deluxe)",
    artista: "Aria"
  },
  {
    posicao: 4,
    musica: "Forbidden Whispers (Live On Lost & Found Tour)",
    artista: "Conan Woolridge"
  },
  {
    posicao: 5,
    musica: "Poets Can't Be Murdered",
    artista: "Trevor"
  },
  {
    posicao: 6,
    musica: "MELANCHOLIA",
    artista: "Alana Grace"
  },
  {
    posicao: 7,
    musica: "Salute",
    artista: "4Music"
  },
  {
    posicao: 8,
    musica: "everlasting",
    artista: "Liz"
  },
  {
    posicao: 9,
    musica: "What Ever Happened?",
    artista: "Even Grace"
  },
  {
    posicao: 10,
    musica: "House Of The Rising Sun",
    artista: "Ava"
  }
];

// main.js
function atualizarTabela() {
  tabelaDados.forEach(function(dado) {
    var posicaoCell = document.getElementById("pos" + dado.posicao);
    var imagemCell = document.getElementById("imagem" + dado.posicao);
    var musicaCell = document.getElementById("song" + dado.posicao);
    var artistaCell = document.getElementById("artist" + dado.posicao);

    var chaveImagem = dado.musica + " - " + dado.artista;

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = linksImagens[chaveImagem];
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
