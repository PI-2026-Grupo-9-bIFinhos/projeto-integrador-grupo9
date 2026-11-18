function mudaCorFundo() {
document.documentElement.style.setProperty('--page-bg', 'red');

  }

function saudaUsuario() {
  const elNomeUsr = document.getElementById('nomeUsrEx00');
  const nomeUsr   = elNomeUsr.value.trim();
  const elSaudaUsr = document.getElementById('saudacaoUsr');

  if (nomeUsr != '') {
     const mensagem =  'Olá, '+nomeUsr+', seja muito bem vindo ao site de processamento de números!'  
     elSaudaUsr.innerHTML = mensagem;
     elSaudaUsr.style.display = 'block';
  } else {
    alert('Você não digitou um nome válido!');
    elSaudaUsr.style.display = 'none';
  }
}
