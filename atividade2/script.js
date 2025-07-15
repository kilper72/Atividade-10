const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('acao');

function ajustarConteudo() {
  if (window.innerWidth <= 600) {
    mensagem.textContent = "Você está usando a versão mobile!";
    botao.style.background = "#28a745"; // verde para mobile
  } else {
    mensagem.textContent = "Bem-vindo à versão desktop do site!";
    botao.style.background = "#007bff"; // azul para desktop
  }
}

window.addEventListener('resize', ajustarConteudo);
window.addEventListener('DOMContentLoaded', ajustarConteudo);