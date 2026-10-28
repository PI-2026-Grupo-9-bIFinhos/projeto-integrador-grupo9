const toggleBtn = document.getElementById('toggle-dark');

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark');
}
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
      localStorage.setItem('dark-mode', 'disabled');
  }
}
