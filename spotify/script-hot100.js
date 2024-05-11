var tabelaDados = [
  { posicao: 1, musica: "My Game", artista: "Fiona", imagem: "https://i.imgur.com/FgZ69Ya.jpg" },
  { posicao: 2, musica: "Boom Boom", artista: "Aria ft. Hannah & Liza", imagem: "" },
  { posicao: 3, musica: "Memories From Home", artista: "Conan Woolridge", imagem: "" },
  { posicao: 4, musica: "Nasty", artista: "Zara", imagem: "" },
  { posicao: 5, musica: "Part of Your World", artista: "Hannah", imagem: "" },
  { posicao: 6, musica: "Alone In Kyoto", artista: "Even Grace", imagem: "" },
  { posicao: 7, musica: "20", artista: "Conan Woolridge", imagem: "" },
  { posicao: 8, musica: "Eyes On Me", artista: "Aria", imagem: "" },
  { posicao: 9, musica: "Heart's Odyssey", artista: "Conan Woolridge", imagem: "" },
  { posicao: 10, musica: "Between Two Worlds", artista: "Conan Woolridge", imagem: "" },
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
