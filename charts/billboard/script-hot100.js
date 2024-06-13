var tabelaDados = [
  { posicao: 1, musica: "Bloodsucker", artista: "Ava", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Salute", artista: "4Music", imagem: "" },
  { posicao: 3, musica: "Rumors", artista: "Owen Graham", imagem: "" },
  { posicao: 4, musica: "Dilemma", artista: "Aria ft. Zara", imagem: "" },
  { posicao: 5, musica: "Memories From Home", artista: "Conan Woolridge", imagem: "" },
  { posicao: 6, musica: "Eyes On Me", artista: "Aria", imagem: "" },
  { posicao: 7, musica: "Stronger Than Love", artista: "Aria ft. Trevor", imagem: "" },
  { posicao: 8, musica: "The Suburbs", artista: "Even Grace", imagem: "" },
  { posicao: 9, musica: "Father Sins", artista: "Trevor", imagem: "" },
  { posicao: 10, musica: "20", artista: "Conan Woolridge", imagem: "" },
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
