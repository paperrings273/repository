// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  { posicao: 1,
    musica: "Juju do pix",
    artista: "me dá pix",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
  },

  { posicao: 2,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
  },

  { posicao: 3,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 4,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 5,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 6,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 7,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 8,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 9,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { posicao: 10,
    musica: "Nome da Música",
    artista: "Nome do Artista",
    imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
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
