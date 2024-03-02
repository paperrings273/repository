var tabelaDados = [
  {
    posicao: 1,
    musica: "House Of The Rising Sun",
    artista: "Ava Thompson",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1210048161218039818/image.png?ex=65f25eab&is=65dfe9ab&hm=f89e9315cb30b153a51fd41d29d4d3cad9bc16f93dff1f1e968ca4a0c13ecfb4&"
  },

  {
    posicao: 2,
    musica: "everlasting",
    artista: "Liz",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208443813907927070/CAPA.png?ex=65ec8881&is=65da1381&hm=6259940612eaf70c7ea83b0cee9394dd8b48861a0befb41bff2184249bf97186&"
  },

  {
    posicao: 3,
    musica: "i owe it to myself",
    artista: "Owen Graham",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65f06dac&is=65ddf8ac&hm=705ec699cc443b166ba4ac5bf010a9ea8b36be604bbd984b29d96b6bc83d8c19&"
  },

  {
    posicao: 4,
    musica: "KIDS SEE GHOSTS",
    artista: "Trevor",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1205585992355156028/coverksg.png?ex=65f497f3&is=65e222f3&hm=dcfa0090f3fd497dccb47363657b34ea3a5b7992b5900f79515045dbe6c1a99a&"
  },

  {
    posicao: 5,
    musica: "When I Get Lost",
    artista: "Conan Woolridge",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208454061439844352/whenigetlost.png?ex=65ec920c&is=65da1d0c&hm=be9c64a73febcb0634ef6704b172b488fcb4b0db4a32011aab112666673f8db1&"
  },

  {
    posicao: 6,
    musica: "Purple Dream",
    artista: "Even Grace",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208523242478903296/capa1-1.png?ex=65ecd27a&is=65da5d7a&hm=55bfaa29c47ce69d91274079a5776a408638a37cf0e445a6165be03902c6a631&"
  },

  {
    posicao: 7,
    musica: "EVERYTHING IS FREEDOM",
    artista: "Trevor",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208475765801353286/eif.png?ex=65eca642&is=65da3142&hm=b277c14455e659fe2fc7bdf941315e23ee9943e106f3685857f3216d7103e343&"
  },

  {
    posicao: 8,
    musica: "Confessions Of A Broken Heart (Deluxe)",
    artista: "Fiona",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208581396092817528/20240125_235905.jpg?ex=65ed08a3&is=65da93a3&hm=64f4ff4031466b5d67f5f17fe432c76f15c68ae08fb690df524719ebad44e781&"
  },

  {
    posicao: 9,
    musica: "The Life Of Greg",
    artista: "Trevor",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208473057090478090/tlog.png?ex=65eca3bd&is=65da2ebd&hm=3874fa1e2b96027a903887d3de7613de9adf99daf93b1e624e07f0684e2a5385&"
  },

  { posicao: 10,
    musica: "Pure Feeling",
    artista: "Liza",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208497806185074818/jXLvpzn.png?ex=65ecbac9&is=65da45c9&hm=c3d56f82ca4788ad5afb8958a266c7bdc78690c6b7648c876bba7e1dc93d2b76&"
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
