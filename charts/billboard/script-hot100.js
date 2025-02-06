var tabelaDados = [
  { posicao: 1, musica: "Late Night Talking", artista: "Eric ft. Liz", imagem: "" },
  { posicao: 2, musica: "RADICAL EXXXTASY", artista: "Even Grace", imagem: "" },
  { posicao: 3, musica: "Die For You", artista: "Eric", imagem: "" },
  { posicao: 4, musica: "Bambino", artista: "Eric", imagem: "" },
  { posicao: 5, musica: "Chasing Freedom", artista: "Ivy Sinclair", imagem: "" },
  { posicao: 6, musica: "Midnight Drive", artista: "Eric", imagem: "" },
  { posicao: 7, musica: "In The End, Just Party", artista: "Even Grace with Ava & Owen Graham", imagem: "" },
  { posicao: 8, musica: "Too Late", artista: "Eric", imagem: "" },
  { posicao: 9, musica: "Nothing 2 Lose", artista: "Even Grace with Mayleen", imagem: "" },
  { posicao: 10, musica: "In My Eyes", artista: "Eric", imagem: "" },
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
