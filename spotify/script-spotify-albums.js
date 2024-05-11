var tabelaDados = [
  {
    posicao: 1,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 2,
    musica: "Confessions Of A Broken Heart (Deluxe)",
    artista: "Fiona",
    imagem:
    "https://i.imgur.com/BbAnTz7.jpeg"
  },

  {
    posicao: 3,
    musica: "The Little Mermaid (Original Motion Picture Soundtrack)",
    artista: "Various Artists",
    imagem:
      "https://i.imgur.com/NwcVtDV.png"
  },

  {
    posicao: 4,
    musica: "House Of The Rising Sun",
    artista: "Ava",
    imagem:
      "https://i.imgur.com/GSbs5fC.png"
  },

  {
    posicao: 5,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/uWggx9r.png"
  },

  {
    posicao: 6,
    musica: "meaningless",
    artista: "Anthony",
    imagem:
    "https://i.imgur.com/YPbjHzk.png"
  },

  {
    posicao: 7,
    musica: "EVERYTHING IS FREEDOM",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/jfBRSg3.png"
  },

  {
    posicao: 8,
    musica: "everlasting",
    artista: "Liz",
    imagem:
    "https://i.imgur.com/4HlsfSc.png"
  },

  {
    posicao: 9,
    musica: "i owe it to myself",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/j6oMvSf.png"
  },

  {
    posicao: 10,
    musica: "VANGUARD",
    artista: "Hannah",
    imagem:
    "https://i.imgur.com/fSJ9aJD.png"
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
