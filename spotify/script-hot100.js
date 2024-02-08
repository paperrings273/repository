var tabelaDados = [
  { posicao: 1, musica: "Nome da música", artista: "Nome do artista", imagem: "https://s2-techtudo.glbimg.com/DltGJnURD11lOxdsACc34epHtn0=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/i/lPgLATQ7iBy4bu9wX5VQ/lanaexplicit-gretchen-meme-eu-teria-vergonha-disso-.jpg" },
  { posicao: 2, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 3, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 4, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 5, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 6, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 7, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 8, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 9, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
  { posicao: 10, musica: "Nome da música", artista: "Nome do artista", imagem: "" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("poshot" + (index + 1));
    var imagemCell = document.getElementById("imagemhot" + (index + 1));
    var musicaCell = document.getElementById("songhot" + (index + 1));
    var artistaCell = document.getElementById("artisthot" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    musicaCell.textContent = dado.musica;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

// Chama a função para atualizar a tabela automaticamente
atualizarAutomaticamente();
