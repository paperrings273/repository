var tabelaDados = [
  { posicao: 1, musica: "DRUNK!", artista: "Ava", imagem: "" },
  { posicao: 2, musica: "HONEY", artista: "Bianca", imagem: "" },
  { posicao: 3, musica: "Remains For Us", artista: "Riley", imagem: "" },
  { posicao: 4, musica: "ORANGE TREES", artista: "Bianca", imagem: "" },
  { posicao: 5, musica: "Heart-to-Heart", artista: "Conan Woolridge", imagem: "" },
  { posicao: 6, musica: "Bloodsucker", artista: "Ava", imagem: "" },
  { posicao: 7, musica: "Let It Go", artista: "Riley", imagem: "" },
  { posicao: 8, musica: "SOFTLY, FOREVER", artista: "Bianca", imagem: "" },
  { posicao: 9, musica: "Crimson", artista: "Riley", imagem: "" },
  { posicao: 10, musica: "Irunafternothing", artista: "Riley", imagem: "" },
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
