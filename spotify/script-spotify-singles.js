// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  {
    posicao: 1,
    musica: "Here's To The Nights",
    artista: "Liz",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1208443813907927070/CAPA.png?ex=65ec8881&is=65da1381&hm=6259940612eaf70c7ea83b0cee9394dd8b48861a0befb41bff2184249bf97186&"
  },

  { posicao: 2,
    musica: "Feeling",
    artista: "Ava Thompson",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1210048161218039818/image.png?ex=65e9242b&is=65d6af2b&hm=983d20efc5332a9b8319550d5630851253d8eb4a622fe9487f72397354bf3d0e&"
  },

  { posicao: 3,
    musica: "I Didn't Know Any...",
    artista: "Owen Graham",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  { posicao: 4,
    musica: "Second",
    artista: "Owen Graham",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  {
    posicao: 5,
    musica: "In The Middle",
    artista: "Owen Graham",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  {
    posicao: 6,
    musica: "The Very Modern Dance",
    artista: "Even Grace",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208523242478903296/capa1-1.png?ex=65ecd27a&is=65da5d7a&hm=55bfaa29c47ce69d91274079a5776a408638a37cf0e445a6165be03902c6a631&",
  },

  {
    posicao: 7,
    musica: "Sugarcane",
    artista: "Owen Graham ft. Bianca",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  {
    posicao: 8,
    musica: "Inner Self",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/uWggx9r.png",
  },

  {
    posicao: 9,
    musica: "The Garden",
    artista: "Owen Graham",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  { posicao: 10,
    musica: "I Walked A Mile In My...",
    artista: "Owen Graham",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
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

// Chama a função para atualizar a tabela
atualizarTabela();
