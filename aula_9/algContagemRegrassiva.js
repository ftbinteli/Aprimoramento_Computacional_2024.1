// crie um algoritmo básico e simples de contagem regressiva utilizando recursividade

function contagemRegressiva(numero) {
    if (numero < 0) {
        return
    }
    console.log(numero)
    contagemRegressiva(numero - 1)
}
