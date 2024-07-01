// dados.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "What Ever Happened?",
    artista: "Even Grace"
  },
  {
    posicao: 2,
    musica: "Dreamscape",
    artista: "Aria"
  },
  {
    posicao: 3,
    musica: "House Of The Rising Sun",
    artista: "Ava"
  },
  {
    posicao: 4,
    musica: "Purple Dream",
    artista: "Even Grace"
  },
  {
    posicao: 5,
    musica: "i owe it to myself",
    artista: "Owen Graham"
  },
  {
    posicao: 6,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge"
  },
  {
    posicao: 7,
    musica: "Confessions Of A Broken Heart (Deluxe)",
    artista: "Fiona"
  },
  {
    posicao: 8,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor"
  },
  {
    posicao: 9,
    musica: "Gone Now",
    artista: "Even Grace"
  },
  {
    posicao: 10,
    musica: "I Really Don't Wanna Hear It Anymore",
    artista: "Holligan"
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
