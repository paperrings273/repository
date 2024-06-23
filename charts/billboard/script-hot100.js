var tabelaDados = [
  { posicao: 1, musica: "Bloodsucker", artista: "Ava", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Wings", artista: "4Music", imagem: "" },
  { posicao: 3, musica: "Family Ties", artista: "Miles Carson ft. Trevor", imagem: "" },
  { posicao: 4, musica: "Boom Boom", artista: "Aria ft. Liza & Hannah", imagem: "" },
  { posicao: 5, musica: "Rumors", artista: "Owen Graham", imagem: "" },
  { posicao: 6, musica: "Eyes On Me", artista: "Aria", imagem: "" },
  { posicao: 7, musica: "Stronger Than Love", artista: "Aria ft. Trevor", imagem: "" },
  { posicao: 8, musica: "Sweetheart", artista: "Holligan", imagem: "" },
  { posicao: 9, musica: "Salute", artista: "4Music", imagem: "" },
  { posicao: 10, musica: "Memories From Home", artista: "Conan Woolridge", imagem: "" },
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
