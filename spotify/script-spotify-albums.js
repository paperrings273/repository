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
    musica: "What Ever Happened?",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/8QfuQKE.png"
  },

  {
    posicao: 3,
    musica: "Forbidden Whispers",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 4,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/5kfkjb9.png"
  },

  {
    posicao: 5,
    musica: "House Of The Rising Sun",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/GSbs5fC.png"
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
    musica: "A Brief Inquiry Into Online Relationships",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/eMFHf9b.png"
  },

  {
    posicao: 8,
    musica: "Purple Dream",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/MRg6Qhw.png"
  },

  {
    posicao: 9,
    musica: "Gone Now",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/40ePcbw.png"
  },

  {
    posicao: 10,
    musica: "The Little Mermaid (Original Motion Picture Soundtrack)",
    artista: "Various Artists",
    imagem:
    "https://i.imgur.com/NwcVtDV.png"
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
