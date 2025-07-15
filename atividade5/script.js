function atualizarTamanho() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById('tela').textContent = `Sua tela tem ${largura} x ${altura} pixels`;
}

window.addEventListener('resize', atualizarTamanho);