
// Substituídas chamadas de função específica por operações diretas
function calcular(operacao, a, b) {
    switch (operacao) {
    case '+':
        // Antes: chamava uma função externa para somar
        // Agora: executa a soma diretamente e retorna o resultado
        return (a + b);
    case '-':
        // Antes: chamava uma função externa para subtrair
        // Agora: executa a subtração diretamente e retorna o resultado
        return (a - b); 
    case '*':
        // Antes: chamava uma função externa para multiplicar
        // Agora: executa a multiplicação diretamente e retorna o resultado
        return (a * b);
    case '/':
        // Antes: chamava uma função externa para dividir.
        // Agora: executa a divisão diretamente, considerando a divisão por zero
        return (a / b);
    default:
        // Mantém a verificação de operações inválidas
        throw new Error('Operação inválida');
    }
}

console.log(calcular('+', 2, 3)); // 5
console.log(calcular('*', 4, 5)); // 20
