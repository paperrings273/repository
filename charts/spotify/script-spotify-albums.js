// dados.js
var tabelaDados = [
  {
    posicao: 1,
    musica: "Salute",
    artista: "4Music"
  },
  {
    posicao: 2,
    musica: "MELANCHOLIA",
    artista: "Alana Grace"
  },
  {
    posicao: 3,
    musica: "Dreamscape",
    artista: "Aria"
  },
  {
    posicao: 4,
    musica: "What Ever Happened?",
    artista: "Even Grace"
  },
  {
    posicao: 5,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge"
  },
  {
    posicao: 6,
    musica: "Before Sunrise (Original Motion Picture Soundtrack)",
    artista: "Conan Woolridge, Fiona"
  },
  {
    posicao: 7,
    musica: "Purple Dream",
    artista: "Even Grace"
  },
  {
    posicao: 8,
    musica: "House Of The Rising Sun",
    artista: "Ava"
  },
  {
    posicao: 9,
    musica: "i owe it to myself",
    artista: "Owen Graham"
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
