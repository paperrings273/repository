var tabelaDados = [
  { posicao: 1, musica: "The Suburbs", artista: "Even Grace", imagem: "" },
  { posicao: 2, musica: "Bloodsucker", artista: "Ava", imagem: "" },
  { posicao: 3, musica: "Alone in Kyoto", artista: "Even Grace", imagem: "" },
  { posicao: 4, musica: "The Very Modern Dance", artista: "Even Grace", imagem: "" },
  { posicao: 5, musica: "Hang the DJ!", artista: "Even Grace", imagem: "" },
  { posicao: 6, musica: "Beetlebum", artista: "Even Grace", imagem: "" },
  { posicao: 7, musica: "Goodbye Jimmy", artista: "Even Grace", imagem: "" },
  { posicao: 8, musica: "London, I Love You but You’re Bringing Me Down", artista: "Even Grace", imagem: "" },
  { posicao: 9, musica: "All Good Children go to Heaven", artista: "Even Grace", imagem: "" },
  { posicao: 10, musica: "Rumors", artista: "Owen Graham", imagem: "" },
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
