function trocarImagem() {
  const img = document.getElementById('imagem');
  if (window.innerWidth <= 600) {
    img.src = 'images (1).jpg';
  } else {
    img.src = '361380406-escudo-do-palmeiras-3.webp';
  }
}

// Verifica ao carregar a página
window.addEventListener('load', trocarImagem);

// Verifica quando a janela for redimensionada
window.addEventListener('resize', trocarImagem);
