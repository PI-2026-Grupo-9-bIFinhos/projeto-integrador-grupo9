function mudaCorFundo() {
// Muda a cor de fundo (elemento com id "caixa-texto")
document.documentElement.style.setProperty('--page-bg', 'red');

  }

function saudaUsuario() {
  const elNomeUsr = document.getElementById('nomeUsrEx00'); // elemento com o nome do usuário
  const nomeUsr   = elNomeUsr.value.trim(); // Recupera o nome do usuario
  const elSaudaUsr = document.getElementById('saudacaoUsr'); // recupera elemento que exibirá a saudação na tela

  if (nomeUsr != '') {// se o nome digitado é válido, exibe a saudação
     const mensagem =  'Olá, '+nomeUsr+', seja muito bem vindo ao site de processamento de números!'  
     elSaudaUsr.innerHTML = mensagem;
     elSaudaUsr.style.display = 'block'; // Torna o elemento visível
  } else {// se o nome digitado NÃO é válido, exibe uma mensagem de erro e oculta a saudação 
    alert('Você não digitou um nome válido!');
    elSaudaUsr.style.display = 'none'; // Torna o elemento invisível
  }
}
