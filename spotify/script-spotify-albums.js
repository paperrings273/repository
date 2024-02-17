var tabelaDados = [
  {
    posicao: 1,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/uWggx9r.png"
  },

  {
    posicao: 2,
    musica: "Everything Is Freedom",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/3RlKr4c.jpg"
  },

  {
    posicao: 3,
    musica: "The Life Of Greg",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/WPYcao8.png"
  },

  {
    posicao: 4,
    musica: "Pure Feeling",
    artista: "Liza",
    imagem:
      "https://i.imgur.com/jXLvpzn.jpg"
  },

  {
    posicao: 5,
    musica: "I owe it to myself",
    artista: "Owen Graham",
    imagem:
      "https://i.imgur.com/VSfImF5.png"
  },

  {
    posicao: 6,
    musica: "Love Signal",
    artista: "Zion",
    imagem:
      "https://i.imgur.com/cYWu7Yx.jpg"
  },

  {
    posicao: 7,
    musica: "When I Get Lost",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/J9FPzWb.png"
  },

  {
    posicao: 8,
    musica: "Lockdown",
    artista: "Liz",
    imagem:
      "https://i.imgur.com/pEys1o7.png"
  },

  { posicao: 9,
    musica: "VANGUARD",
    artista: "Hannah",
    imagem:
    "https://i.imgur.com/kh25Tn7.png"
  },

  {
    posicao: 10,
    musica: "Purple Dream",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/pXBYVJp.png"
  },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado) {
    var posicaoCell = document.getElementById("pos" + dado.posicao);
    var imagemCell = document.getElementById("imagem" + dado.posicao);
    var musicaCell = document.getElementById("song" + dado.posicao);
    var artistaCell = document.getElementById("artist" + dado.posicao);

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
