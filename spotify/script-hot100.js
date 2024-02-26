var tabelaDados = [
  { posicao: 1, musica: "Feeling", artista: "Ava Thompson", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Here's To The Nights", artista: "Liz", imagem: "" },
  { posicao: 3, musica: "I Didn't Know Any Better", artista: "Owen Graham", imagem: "" },
  { posicao: 4, musica: "Timeless", artista: "Owen Graham", imagem: "" },
  { posicao: 5, musica: "The Very Modern Dance", artista: "Even Grace", imagem: "" },
  { posicao: 6, musica: "Sugarcane", artista: "Owen Graham ft. Bianca", imagem: "" },
  { posicao: 7, musica: "Second", artista: "Owen Graham", imagem: "" },
  { posicao: 8, musica: "The Garden", artista: "Owen Graham", imagem: "" },
  { posicao: 9, musica: "I Walked I Mile In My Room", artista: "Owen Graham", imagem: "" },
  { posicao: 10, musica: "(I Hate Myself Sometimes)", artista: "Owen Graham", imagem: "" },
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
