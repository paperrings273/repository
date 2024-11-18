var tabelaDados = [
  { posicao: 1, musica: "Late Night Talking", artista: "Eric & Liz", imagem: "" },
  { posicao: 2, musica: "Bloodsucker", artista: "Ava", imagem: "" },
  { posicao: 3, musica: "King Cry-Baby", artista: "Kadu", imagem: "" },
  { posicao: 4, musica: "Never Back Down", artista: "Blair", imagem: "" },
  { posicao: 5, musica: "Oh, Was That Yours?", artista: "Ava", imagem: "" },
  { posicao: 6, musica: "Let It Go", artista: "Riley", imagem: "" },
  { posicao: 7, musica: "Overthinking", artista: "Harper", imagem: "" },
  { posicao: 8, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 9, musica: "Unfiltered", artista: "Ava", imagem: "" },
  { posicao: 10, musica: "Stronger Than Love", artista: "Aria & Trevor", imagem: "" },
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
