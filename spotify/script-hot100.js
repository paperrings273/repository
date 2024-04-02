var tabelaDados = [
  { posicao: 1, musica: "Eyes On Me", artista: "Aria", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Forbidden", artista: "Aroon", imagem: "" },
  { posicao: 3, musica: "Soul For My Love", artista: "Ava", imagem: "" },
  { posicao: 4, musica: "20", artista: "Conan Woolridge", imagem: "" },
  { posicao: 5, musica: "Inner Self", artista: "Trevor", imagem: "" },
  { posicao: 6, musica: "feel like sheet", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 7, musica: "Feeling", artista: "Ava", imagem: "" },
  { posicao: 8, musica: "Pleasure Addiction", artista: "Aroon", imagem: "" },
  { posicao: 9, musica: "Beetlebum", artista: "Even Grace", imagem: "" },
  { posicao: 10, musica: "soul", artista: "Anthony", imagem: "" },
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
