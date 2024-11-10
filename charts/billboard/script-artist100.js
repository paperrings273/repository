var tabelaDados = [
  { posicao: 1, artista: "Ava", imagem: "https://i.imgur.com/egopiOi.jpeg" },
  { posicao: 2, artista: "Eric", imagem: "https://i.imgur.com/QUXN00i.png" },
  { posicao: 3, artista: "4Music", imagem: "https://i.imgur.com/yat3cqm.png" },
  { posicao: 4, artista: "Trevor", imagem: "https://citizen-magazine.co/wp-content/uploads/2023/12/5-1-scaled-1-770x1024.jpg" },
  { posicao: 5, artista: "Alana Grace", imagem: "https://i.imgur.com/BYJKBJX.jpeg" },
];

function atualizarTabela() {
  tabelaDados.forEach(function(dado, index) {
    var posicaoCell = document.getElementById("pos" + (index + 1));
    var imagemCell = document.getElementById("imagem" + (index + 1));
    var artistaCell = document.getElementById("artist" + (index + 1));

    posicaoCell.textContent = dado.posicao;
    imagemCell.src = dado.imagem;
    artistaCell.textContent = dado.artista;
  });
}

atualizarTabela();
function atualizarAutomaticamente() {
  setInterval(atualizarTabela, 5000);
}

atualizarAutomaticamente();
