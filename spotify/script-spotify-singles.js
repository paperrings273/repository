// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  { posicao: 1,
    musica: "Inner Self",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/uWggx9r.png"
  },

  { posicao: 2,
    musica: "Party Favors",
    artista: "Zara",
    imagem:
      "https://i.imgur.com/FgZ69Ya.jpeg"
  },

  { posicao: 3,
    musica: "Blame It On Me",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/uWggx9r.png"
  },

  { posicao: 4,
    musica: "EARTHQUAKE",
    artista: "Trevor",
    imagem:
    "https://i.imgur.com/WPYcao8.png"
  },

  {
    posicao: 5,
    musica: "ALRIGHT",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/3RlKr4c.jpg"
  },

  {
    posicao: 6,
    musica: "I HAVE A DREAM",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/3RlKr4c.jpg"
  },

  {
    posicao: 7,
    musica: "CAN WE BE FRIENDS?",
    artista: "Trevor",
    imagem:
      "https://i.imgur.com/WPYcao8.png"
  },

  {
    posicao: 8,
    musica: "feel like sheet",
    artista: "Ivy Sinclair",
    imagem:
      "https://i.imgur.com/SlcGzdw.png"
  },

  {
    posicao: 9,
    musica: "Beetlebum",
    artista: "Even Grace",
    imagem:
      "https://i.imgur.com/eTjuhMK.png"
  },

  { posicao: 10,
    musica: "Fantasmagoric Feelings",
    artista: "Liza",
    imagem:
    "https://i.imgur.com/jXLvpzn.jpg"
  },

  { posicao: 11,
    musica: "Juju do pix",
    artista: "me dá pix",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
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
