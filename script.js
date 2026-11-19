function saudaUsuario() {
    const dark = document.getElementById('dark');[span_3](start_span)[span_3](end_span)
    const black = document.getElementById('black');[span_4](start_span)[span_4](end_span)
    const container = document.getElementById('container-botoes');

    // Aplica o modo escuro
    document.body.style.backgroundColor = "#000000";[span_5](start_span)[span_5](end_span)
    
    // Verifica se o elemento 'black' existe na página antes de estilizar
    if (black) {
        black.style.backgroundColor = "#000000";[span_6](start_span)[span_6](end_span)
        black.style.border = "#000000 solid";[span_7](start_span)[span_7](end_span)
    }

    // Remove o botão de modo escuro atual
    if (dark) {
        dark.remove();
    }

    // Cria o novo botão para voltar ao modo claro
    const botaoClaro = document.createElement('button');
    botaoClaro.id = 'light';
    botaoClaro.innerText = 'Modo Claro';
    botaoClaro.onclick = saudaUsuario2; // Chama a função de modo claro ao clicar

    // Adiciona o novo botão na tela
    container.appendChild(botaoClaro);
}

function saudaUsuario2() {[span_8](start_span)[span_8](end_span)
    const light = document.getElementById('light');
    const black = document.getElementById('black');
    const container = document.getElementById('container-botoes');

    // Volta para o modo claro (branco)
    document.body.style.backgroundColor = "#FFFFFF";
    
    if (black) {
        black.style.backgroundColor = "#FFFFFF";
        black.style.border = "#FFFFFF solid";
    }

    // Remove o botão de modo claro
    if (light) {
        light.remove();
    }

    // Recria o botão original de modo escuro
    const botaoEscuro = document.createElement('button');
    botaoEscuro.id = 'dark';
    botaoEscuro.innerText = 'Modo Escuro';
    botaoEscuro.onclick = saudaUsuario;

    container.appendChild(botaoEscuro);
}
