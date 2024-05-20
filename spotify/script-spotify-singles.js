var tabelaDados = [
  {
    posicao: 1,
    musica: "Rumors",
    artista: "Owen Graham",
    imagem:
    "https://i.imgur.com/dhc5YTC.jpeg"
  },

  {
    posicao: 2,
    musica: "Boom Boom (feat. Hannah & Liza)",
    artista: "Aria, Hannah, Liza",
    imagem:
      "https://i.imgur.com/8yrpSbT.png"
  },

  {
    posicao: 3,
    musica: "Memories From Home",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 4,
    musica: "Blind",
    artista: "Anthony",
    imagem:
      "https://i.imgur.com/kmlHHte.png"
  },

  {
   posicao: 5,
   musica: "Trevor",
   artista: "Inner Self",
   imagem:
     "https://i.imgur.com/5kfkjb9.png"
},

  {
    posicao: 6,
    musica: "20",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/dcXh0vd.png"
  },

  {
    posicao: 7,
    musica: "Alone in Kyoto",
    artista: "Even Grace",
    imagem:
    "https://i.imgur.com/sNHOrPg.png"
  },

  {
    posicao: 8,
    musica: "Eyes On Me",
    artista: "Aria",
    imagem:
      "https://i.imgur.com/DZh9I3s.png"
  },

  {
    posicao: 9,
    musica: "I May Destroy You",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/5kfkjb9.png"
  },

  {
    posicao: 10,
    musica: "Chameleon's Serenade",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/dcXh0vd.png"
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
