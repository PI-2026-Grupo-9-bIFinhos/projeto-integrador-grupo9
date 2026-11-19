function mudaCorFundo() {
document.documentElement.style.setProperty('--page-bg', 'red');

  }

function saudaUsuario() {
  console.log('Estou aqui');
  const corBGAtual = document.body.style.backgroundColor.trim().toUpperCase();
  console.log(corBGAtual);
  console.log(corBGAtual=='WHITE');
  
  if (corBGAtual=='WHITE') {
    console.log('Ponto 1');
    document.body.style.backgroundColor = 'black';
  } else{
    console.log('Ponto 2');
    document.body.style.backgroundColor = 'white';
  }

  }
