var tabelaDados = [
  { posicao: 1, musica: "Party Favors", artista: "Zara", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Inner Self", artista: "Trevor", imagem: "" },
  { posicao: 3, musica: "Blame It On Me", artista: "Trevor", imagem: "" },
  { posicao: 4, musica: "I Didn't Know Any Better", artista: "Owen Graham", imagem: "" },
  { posicao: 5, musica: "Timeless", artista: "Owen Graham", imagem: "" },
  { posicao: 6, musica: "Second", artista: "Owen Graham", imagem: "" },
  { posicao: 7, musica: "Feel Like Sheet", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 8, musica: "Beetlebum", artista: "Even Grace", imagem: "" },
  { posicao: 9, musica: "In The Middle", artista: "Owen Graham", imagem: "" },
  { posicao: 10, musica: "Nightmare", artista: "Trevor", imagem: "" },
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
