function mudaCorFundo() {
document.documentElement.style.setProperty('--page-bg', 'red');

  }

function saudaUsuario() {
  const dark = document.getElementById('dark');   
  const black = document.getElementById('black');   
  document.body.style.backgroundColor = "#000000";
  dark.style.backgroundColor = "#000000";
  black.style.backgroundColor = "#000000";
  black.style.border = " #000000 solid"
}
function saudaUsuario2() {
  const light = document.getElementById('white');   
  const white = document.getElementById('white');   
  document.body.style.backgroundColor = "white";
  dark.style.backgroundColor = "white";
  black.style.backgroundColor = "white";
  black.style.border = " #000000 solid"
}
