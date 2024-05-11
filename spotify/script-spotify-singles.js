// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  {
    posicao: 1,
    musica: "My Game",
    artista: "Fiona",
    imagem:
    "https://i.imgur.com/BybroZc.jpeg"
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
    musica: "Nasty",
    artista: "Zara",
    imagem:
      "https://i.imgur.com/OZA0Dl2.jpeg"
  },

  {
    posicao: 4,
    musica: "Memories From Home",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/65gXFm7.png"
  },

  {
   posicao: 5,
   musica: "Part of Your World (From \"The Little Mermaid\")",
   artista: "Hannah",
   imagem:
     "https://i.imgur.com/xFVtiLZ.png"
},

  {
    posicao: 6,
    musica: "Alone In Kyoto",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/sNHOrPg.png"
  },

  {
    posicao: 7,
    musica: "Eyes On Me",
    artista: "Aria",
    imagem:
    "https://i.imgur.com/DZh9I3s.png"
  },

  {
    posicao: 8,
    musica: "20",
    artista: "Conan Woolridge",
    imagem:
      "https://i.imgur.com/fGm30Zb.png"
  },

  {
    posicao: 9,
    musica: "Inner Self",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/5kfkjb9.png"
  },

  {
    posicao: 10,
    musica: "Forbidden",
    artista: "Aroon",
    imagem:
    "https://i.imgur.com/710YKcD.png"
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
