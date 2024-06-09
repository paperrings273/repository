var tabelaDados = [
  {
    posicao: 1,
    musica: "Dreamscape",
    artista: "Aria",
    imagem:
    "https://i.imgur.com/YOeKr4e.png"
  },

  {
    posicao: 2,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 3,
    musica: "What Ever Happened?",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/4UxqnEn.png"
  },

  {
    posicao: 4,
    musica: "everlasting",
    artista: "Liz",
    imagem:
      "https://i.imgur.com/UP6Su3j.png"
  },

  {
    posicao: 5,
    musica: "i owe it to myself",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/QeOU7TT.png"
  },

  {
    posicao: 6,
    musica: "side-eyed means",
    artista: "Logan",
    imagem:
    "https://i.imgur.com/7kv3rmq.png"
  },

  {
    posicao: 7,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/HaozlBp.png"
  },

  {
    posicao: 8,
    musica: "House Of The Rising Sun",
    artista: "Ava",
    imagem:
    "https://i.imgur.com/sifpteD.png"
  },

  {
    posicao: 9,
    musica: "A Brief Inquiry Into Online Relationships",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/ZyaFSC1.png"
  },

  {
    posicao: 10,
    musica: "Purple Dream",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/gssMuy8.png"
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
