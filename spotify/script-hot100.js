var tabelaDados = [
  { posicao: 1, musica: "Pleasure Addiction", artista: "Aroon", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Soul For My Love", artista: "Ava", imagem: "" },
  { posicao: 3, musica: "20", artista: "Conan Woolridge", imagem: "" },
  { posicao: 4, musica: "Beetlebum", artista: "Even Grace", imagem: "" },
  { posicao: 5, musica: "Inner Self", artista: "Trevor", imagem: "" },
  { posicao: 6, musica: "grocery story", artista: "Owen Graham", imagem: "" },
  { posicao: 7, musica: "here's to the nights", artista: "Liz", imagem: "" },
  { posicao: 8, musica: "you broke me first", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 9, musica: "Party Favors", artista: "Zara", imagem: "" },
  { posicao: 10, musica: "i didn't know any better", artista: "Owen Graham", imagem: "" },
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
