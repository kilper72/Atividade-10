function atualizarTamanho() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById('tela').textContent = `Sua tela tem ${largura} x ${altura} pixels`;

  if (largura <= 600) {
    document.getElementById('imagem').style.display = "none";
  } else {
    document.getElementById('imagem').style.display = "block";
  }
}

window.addEventListener('resize', atualizarTamanho);