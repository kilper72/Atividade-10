function atualizarTamanho() {
  const largura = window.innerWidth;
  const altura = window.innerHeight;
  document.getElementById('tela').textContent = `Sua tela tem ${largura} x ${altura} pixels`;

  if (largura <= 600) {
    document.body.style.backgroundColor = "#28a745"; 
  } else {
    document.body.style.backgroundColor = "#007bff"; 
  }
}

window.addEventListener('resize', atualizarTamanho);
window.addEventListener('DOMContentLoaded', atualizarTamanho); 