// Função para verificar os números sorteados
function verificarSorte() {
    // Números sorteados pela aplicação (armazenados)
    const numerosSorteados = [4, 12, 89];

    // Números escolhidos pelo cliente
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    const num5 = parseInt(document.getElementById('num5').value);
    const num6 = parseInt(document.getElementById('num6').value);

    // Validação de acertos
    let acertos = 0;
    const numerosEscolhidos = [num1, num2, num3, num4, num5, num6];
    
    numerosEscolhidos.forEach(num => {
        if (numerosSorteados.includes(num)) {
            acertos++;
        }
    });

    // Exibição do resultado
    const resultado = document.getElementById('resultado');
    if (acertos > 0) {
        const desconto = acertos * 15;
        resultado.innerHTML = `Você acertou ${acertos} números! Você ganhou ${desconto}% de desconto!`;
    } else {
        resultado.innerHTML = 'Nenhum número acertado. Tente novamente!';
    }
}

// Função para aplicar o valor que o cliente deseja pagar nos produtos
function aplicarValor() {
    const valorMouse = parseInt(document.getElementById('valorMouse').value);
    const valorTeclado = parseInt(document.getElementById('valorTeclado').value);
    const valorAplicado = document.getElementById('valorAplicado');

    let texto = 'Você escolheu pagar os seguintes valores: <br>';
    if (valorMouse > 0) {
        texto += `Mouse: R$ ${valorMouse} <br>`;
    }
    if (valorTeclado > 0) {
        texto += `Teclado: R$ ${valorTeclado} <br>`;
    }

    valorAplicado.innerHTML = texto;
}
