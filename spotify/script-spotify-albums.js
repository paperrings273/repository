var tabelaDados = [
  {
    posicao: 1,
    musica: "House Of The Rising Sun",
    artista: "Ava",
    imagem:
    "https://i.imgur.com/GSbs5fC.png"
  },

  {
    posicao: 2,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/uWggx9r.png"
  },

  {
    posicao: 3,
    musica: "meaningless",
    artista: "Anthony",
    imagem:
    "https://i.imgur.com/YPbjHzk.png"
  },

  {
    posicao: 4,
    musica: "EVERYTHING IS FREEDOM",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/jfBRSg3.png"
  },

  {
    posicao: 5,
    musica: "Confessions Of A Broken Heart (Deluxe)",
    artista: "Fiona",
    imagem:
    "https://i.imgur.com/BbAnTz7.jpeg"
  },

  {
    posicao: 6,
    musica: "The Life Of Greg",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/WPYcao8.png"
  },

  {
    posicao: 7,
    musica: "HEARTACHE",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/cYZkT3T.jpeg"
  },

  {
    posicao: 8,
    musica: "i owe it to myself",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/j6oMvSf.png"
  },

  {
    posicao: 9,
    musica: "When I Get Lost",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/8qWDiO7.png"
  },

  { posicao: 10,
    musica: "everlasting",
    artista: "Liz",
    imagem:
    "https://i.imgur.com/4HlsfSc.png"
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
