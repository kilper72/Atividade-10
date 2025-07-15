const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function checkScreen() {
  if (window.innerWidth <= 600) {
    menu.style.display = 'none';
    menuBtn.style.display = 'block';
  } else {
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
  }
}

menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
});

window.addEventListener('resize', checkScreen);
window.addEventListener('DOMContentLoaded', checkScreen);