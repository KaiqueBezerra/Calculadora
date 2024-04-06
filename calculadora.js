/* Calculadora */

calcular = (tipo,valor) => {

    if (tipo == 'valor') {
        document.getElementById('resultado').value += valor
    }

    if (tipo == 'acao') {

        if (valor == "C") {
            document.getElementById('resultado').value = ''
        }

        if (valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor == '=') {
            let campoResultado = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = campoResultado
        }
    }
}

/* Temas */

tema1 = () => {
    document.getElementById('calculadora').className = 'tema1'
}

tema2 = () => {
    document.getElementById('calculadora').className = 'tema2'
}