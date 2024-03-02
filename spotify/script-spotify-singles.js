// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  {
    posicao: 1,
    musica: "Soul For My Love",
    artista: "Ava Thompson",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1213365437723574342/image.png?ex=65f5359f&is=65e2c09f&hm=b9b2510b3b8403788ad9653e06a712d85ccf7f7e76e9f2144f84a2418e0fbfbd&"
  },

  {
    posicao: 2,
    musica: "Pleasure Addiction",
    artista: "Aaron",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1211845091707195472/Novo_Projeto_22.png?ex=65efadb0&is=65dd38b0&hm=e9c9274e72590d924ec1d10d75e742c5345b0fd379915bb6c9802c083c1d49b4&"
  },

  {
    posicao: 3,
    musica: "Beetlebum",
    artista: "Even Grace",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1212962327427686431/single1.png?ex=65f3be32&is=65e14932&hm=7aa7924c87fdf88777ff1c144b12af521df0ea17b719ba94b9da20314281e907&"
  },

  { posicao: 4,
    musica: "20",
    artista: "Conan Woolridge",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1212962238038679582/20cover.png?ex=65f3be1d&is=65e1491d&hm=ae306d5a8d9835ee6380e47e2676ce3b70444c14ae9de78d482f0e35bb8601b6&"
  },

  {
    posicao: 5,
    musica: "grocery story",
    artista: "Owen Graham",
    imagem:
    "https://cdn.discordapp.com/attachments/1200979746297749656/1204441086244691968/owen-capa-1.png?ex=65f06dac&is=65ddf8ac&hm=705ec699cc443b166ba4ac5bf010a9ea8b36be604bbd984b29d96b6bc83d8c19&"
  },

  {
    posicao: 6,
    musica: "Here's For The Nights",
    artista: "Liz",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208443813907927070/CAPA.png?ex=65ec8881&is=65da1381&hm=6259940612eaf70c7ea83b0cee9394dd8b48861a0befb41bff2184249bf97186&"
  },

  {
    posicao: 7,
    musica: "Trevor",
    artista: "Inner Self",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979746297749656/1208475894344060928/coverksg.png?ex=65eca661&is=65da3161&hm=8634d26183136228e3b4f1f8f17ef566d53d992ad284182e0e76c73d64ae33b5&"
  },

  {
    posicao: 8,
    musica: "Party Favors",
    artista: "Zara",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1207400286465822720/capa.jpg?ex=65f1f724&is=65df8224&hm=fec52eaa6c08cd43ae573caa772f28d2551e3a8afe43026e9d08820d42533d7a&"
  },

  {
    posicao: 9,
    musica: "You Broke Me First",
    artista: "Ivy Sinclair",
    imagem:
      "https://cdn.discordapp.com/attachments/1200979781286625300/1205274467492696114/Purple_And_Red_Minimalist_CD_Cover.png?ex=65f375d1&is=65e100d1&hm=993ee7a31eb30e29e290cf1a9eab7e95e68f644d5ff098af21a14ede15b3b7ef&"
  },

  { posicao: 10,
    musica: "Lunatic",
    artista: "Anthony",
    imagem:
      "https://cdn.discordapp.com/attachments/982022570469646366/1213518840009334885/like_a_killer.png?ex=65f5c47d&is=65e34f7d&hm=20b4e04a73c1be3ae276f5a2920cfdc4e1c87e63088b474c6b685bf604f47823&"
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
