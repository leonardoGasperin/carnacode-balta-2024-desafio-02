window.calcularImc = function (altura, peso, sexo, isIdoso) {
    const imcValor = peso / (altura * altura);

    switch (isIdoso) {
        case true:
            if (sexo === 'masculino') {
                resultadoMasculinoIdoso(imcValor);
            } else if (sexo === 'feminino') {
                resultadoFemininoIdosa(imcValor);
            }
            break;
        case false:
            if (sexo === 'masculino') {
                resultadoMasculino(imcValor);
            } else if (sexo === 'feminino') {
                resultadoFeminino(imcValor);
            }
            break;
        default:
            break;
    }
}

function resultadoMasculino(imcValor) {
    if (imcValor < 18.5) {
        console.log("Abaixo do peso");
    } else if (imcValor >= 18.5 && imcValor < 25) {
        console.log("Peso normal");
    } else if (imcValor >= 25 && imcValor < 29.9) {
        console.log("Sobrepeso");
    } else if (imcValor >= 29.9) {
        console.log("Obesidade");
    } else {
        console.log("Valor de IMC inválido");
    }
}

function resultadoMasculinoIdoso(imcValor) {
    if (imcValor < 23) {
        console.log("Abaixo do peso");
    } else if (imcValor >= 23 && imcValor < 29.9) {
        console.log("Peso normal");
    } else if (imcValor >= 29.9) {
        console.log("Sobrepeso/Obesidade");
    } else {
        console.log("Valor de IMC inválido");
    }
    
}

function resultadoFeminino(imcValor) {
    if (imcValor < 19.1) {
        console.log("Abaixo do peso");
    } else if (imcValor >= 19.1 && imcValor < 25.8) {
        console.log("Peso normal");
    } else if (imcValor >= 25.8 && imcValor < 27.3) {
        console.log("Sobrepeso");
    } else if (imcValor >= 27.3) {
        console.log("Obesidade");
    } else {
        console.log("Valor de IMC inválido");
    }
}

function resultadoFemininoIdosa(imcValor) {
    if (imcValor < 17) {
        console.log("Abaixo do peso");
    } else if (imcValor >= 17 && imcValor < 24.4) {
        console.log("Peso normal");
    } else if (imcValor >= 24.4 && imcValor < 28.9) {
        console.log("Sobrepeso");
    } else if (imcValor >= 29) {
        console.log("Obesidade");
    } else {
        console.log("Valor de IMC inválido");
    }
}
