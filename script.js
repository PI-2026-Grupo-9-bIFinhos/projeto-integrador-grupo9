const toggleBtn = document.getElementById('toggle-dark');

// 1. Ao carregar a página, verifica se o usuário já tinha ativado o modo escuro antes
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark');
}

// 2. Escuta o clique no botão para ligar/desligar o modo escuro
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Salva a preferência atual do usuário para que ela não se perca ao mudar de página
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
