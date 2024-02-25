var tabelaDados = [
  {
    posicao: 1,
    musica: "House Of The Rising Sun",
    artista: "Ava Thompson",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1210048161218039818/image.png?ex=65e9242b&is=65d6af2b&hm=983d20efc5332a9b8319550d5630851253d8eb4a622fe9487f72397354bf3d0e&"
  },

  {
    posicao: 2,
    musica: "Everlasting",
    artista: "Liz",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1208443813907927070/CAPA.png?ex=65ec8881&is=65da1381&hm=6259940612eaf70c7ea83b0cee9394dd8b48861a0befb41bff2184249bf97186&"
  },

  {
    posicao: 3,
    musica: "I Owe It To Myself",
    artista: "Owen Graham",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65e7332c&is=65d4be2c&hm=f3b3266f900b3bba9c365aa0b62d3b9ac78938e0d076c041dd52e2d0f9c357a0&"
  },

  {
    posicao: 4,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1208475894344060928/coverksg.png?ex=65eca661&is=65da3161&hm=8634d26183136228e3b4f1f8f17ef566d53d992ad284182e0e76c73d64ae33b5&"
  },

  {
    posicao: 5,
    musica: "The Life Of Greg",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/WPYcao8.png"
  },

  {
    posicao: 6,
    musica: "Everything Is Freedom",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/3RlKr4c.jpg"
  },

  {
    posicao: 7,
      musica: "Pure Feeling",
    artista: "Liza",
    imagem:
    "https://i.imgur.com/jXLvpzn.jpg"
  },

  {
    posicao: 8,
      musica: "When I Get Lost",
    artista: "Conan Woolridge",
    imagem:
    "https://i.imgur.com/J9FPzWb.png"
  },

  { posicao: 9,
    musica: "Lockdown",
    artista: "Liz",
    imagem:
      "https://i.imgur.com/pEys1o7.png"
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
