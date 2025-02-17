var tabelaDados = [
  { posicao: 1, musica: "In The End, Just Party", artista: "Even Grace with Ava & Owen Graham", imagem: "" },
  { posicao: 2, musica: "Be Careful", artista: "Blair ft. Owen Graham", imagem: "" },
  { posicao: 3, musica: "RADICAL EXXXTASY", artista: "Even Grace", imagem: "" },
  { posicao: 4, musica: "Heart Break", artista: "Blair", imagem: "" },
  { posicao: 5, musica: "Gentleman", artista: "Blair", imagem: "" },
  { posicao: 6, musica: "Chasing Freedom", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 7, musica: "Crazy Mind", artista: "Blair", imagem: "" },
  { posicao: 8, musica: "Drinking About You", artista: "Blair", imagem: "" },
  { posicao: 9, musica: "Goodbye", artista: "Blair ft. Tommy Tommy", imagem: "" },
  { posicao: 10, musica: "I Can't Drive 55", artista: "Even Grace", imagem: "" },
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

atualizarAutomaticamente();
