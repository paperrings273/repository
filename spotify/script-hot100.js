var tabelaDados = [
  { posicao: 1, musica: "Dilemma", artista: "Aria ft. Zara", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Alone in Kyoto", artista: "Even Grace", imagem: "" },
  { posicao: 3, musica: "The Suburbs", artista: "Even Grace", imagem: "" },
  { posicao: 4, musica: "Boom Boom", artista: "Aria ft. Liza & Hannah", imagem: "" },
  { posicao: 5, musica: "Memories From Home", artista: "Conan Woolridge", imagem: "" },
  { posicao: 6, musica: "20", artista: "Conan Woolridge", imagem: "" },
  { posicao: 7, musica: "Chameleon Serenade", artista: "Conan Woolridge", imagem: "" },
  { posicao: 8, musica: "When I Was Younger", artista: "Conan Woolridge", imagem: "" },
  { posicao: 9, musica: "Don't Play Me", artista: "Aria ft. Even Grace", imagem: "" },
  { posicao: 10, musica: "LA LA LA", artista: "B2b", imagem: "" },
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
