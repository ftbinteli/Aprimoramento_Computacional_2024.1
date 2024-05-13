// Problema: Operações com Frutas:

// Na frutaria do Benites, ele tem uma lista de frutas e está realizando várias operações com ela. Ajude-o a resolver as seguintes tarefas:

// 1. Benites possui uma lista inicial de frutas: maçã, banana, laranja, uva, morango.
// 2. Ele quer saber qual é a terceira fruta da lista.
// 3. Benites percebeu que a laranja estava muito madura e a trocou por uma melancia. Atualize a lista de frutas.
// 4. Chegaram novas frutas na frutaria: pera e abacaxi. Junte essas frutas à lista atual.
// 5. Benites quer saber em que posição está a uva na lista.
// 6. Ele está em dúvida se tem alguma pêra na lista. Verifique isso para ele.
// 7. Benites decidiu que só quer as frutas que custam mais de R$ 2,00 cada. Liste essas frutas para ele.
// 8. Ele decidiu dobrar a quantidade de cada fruta na lista (em kg). Quais são as novas quantidades?
// 9. Benites quer saber quantos quilos de frutas ele tem no total.
// 10. Organize a lista de frutas em ordem alfabética.
// 11. Benites quer fazer uma cópia da lista atual para backup.
// 12. Por fim, Benites decidiu limpar o estoque de frutas. Esvazie a lista.


const frutas = ['maçã', 'banana', 'laranja', 'uva', 'morango'];

// 2. Terceira fruta da lista

console.log(frutas [2]);

// 3. Trocar laranja por melancia

frutas[2] = 'melancia';
console.log(frutas);

// 4. Adicionar pera e abacaxi

frutas.push('pera', 'abacaxi');

// 5. Posição da uva

const posiçãoUva = frutas.indexOf('uva');
console.log(posiçãoUva);

// 6. Verificar se tem pêra

const temPera = frutas.includes('pera');

// 7. Frutas mais caras que R$ 2,00