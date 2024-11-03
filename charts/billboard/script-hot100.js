var tabelaDados = [
  { posicao: 1, musica: "Oh, Was That Yours?", artista: "Ava", imagem: "" },
  { posicao: 2, musica: "Late Night Talking", artista: "Eric & Liz", imagem: "" },
  { posicao: 3, musica: "Stronger Than Love", artista: "Aria & Trevor", imagem: "" },
  { posicao: 4, musica: "AFTERMATH", artista: "Alana Grace", imagem: "" },
  { posicao: 5, musica: "TEXAS ON FIRE", artista: "Hannah", imagem: "" },
  { posicao: 6, musica: "Over Those Hills", artista: "Trevor", imagem: "" },
  { posicao: 7, musica: "La La La", artista: "B2B", imagem: "" },
  { posicao: 8, musica: "Word Up!", artista: "4Music", imagem: "" },
  { posicao: 9, musica: "Wings", artista: "4Music", imagem: "" },
  { posicao: 10, musica: "Bloodsucker", artista: "Ava", imagem: "" },
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
