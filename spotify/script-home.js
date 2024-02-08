// Variáveis para armazenar os dados da tabela
var tabelaDados = [
  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
  },

  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg"
  },

  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

  { imagem:
      "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },

];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var imagemCell = document.getElementById("imagemhome" + (index + 1));

    imagemCell.src = dado.imagem;
  });
}

atualizarTabela();
