// artist-data.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "The Drive",
    artista: "Ava"
  },
  {
    posicao: 2,
    musica: "Overgrown",
    artista: "Eric"
  },
  {
    posicao: 3,
    musica: "Salute",
    artista: "4Music"
  },
  {
    posicao: 4,
    musica: "Poets Can't Be Murdered",
    artista: "Trevor"
  },
  {
    posicao: 5,
    musica: "Dreamscape",
    artista: "Aria"
  },
  {
    posicao: 6,
    musica: "MELANCHOLIA",
    artista: "Alana Grace"
  },
  {
    posicao: 7,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge"
  },
  {
    posicao: 8,
    musica: "House Of The Rising Sun",
    artista: "Ava"
  },
  {
    posicao: 9,
    musica: "What Ever Happened?",
    artista: "Even Grace"
  },
  {
    posicao: 10,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor"
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
