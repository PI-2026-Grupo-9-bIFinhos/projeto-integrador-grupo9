function mudaCorFundo() {
// Muda a cor de fundo (elemento com id "caixa-texto")
let corFundo = corAleatoria().toUpperCase();
document.getElementById("caixa-texto").
style.backgroundColor = corFundo;
document.getElementById("cor-fundo").innerHTML =
corFundo;}
