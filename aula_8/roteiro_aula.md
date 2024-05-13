Aqui está uma sequência de comandos em JavaScript para demonstrar várias operações comuns em arrays:


// ----------------------------------------------------------------------
1. **Criar um Array com alguns Números:**

let meuArray = [5, 3, 9, 1, 4];
// console.log("Array inicial:", meuArray);

// ----------------------------------------------------------------------
// 2. **Acessar um Elemento por Índice:**

let primeiroElemento = meuArray[0];
console.log("Primeiro elemento:", primeiroElemento);

// ----------------------------------------------------------------------
3. **Alterar um Elemento por Índice:**

meuArray[2] = 10;
console.log("Array após alteração:", meuArray);

// ----------------------------------------------------------------------
4. **Concatenar Arrays:**

let outroArray = [7, 2];
let concatenado = meuArray.concat(outroArray);
console.log("Array concatenado:", concatenado);

// ----------------------------------------------------------------------
5. **Encontrar o Índice de um Elemento:**

let indice = meuArray.indexOf(9);
console.log("Índice do número 9:", indice);

// ----------------------------------------------------------------------
6. **Verificar se um Elemento Existe no Array:**

let existe = meuArray.includes(8);
console.log("O número 8 está no array?", existe);
ole.log("O número 8 está no array?", existe);
   
// ----------------------------------------------------------------------
7. **Filtrar Elementos do Array com uma Função de Teste:**

let filtrado = meuArray.filter(item => item > 3);
console.log("Elementos maiores que 3:", filtrado);

// ----------------------------------------------------------------------
8. **Mapear um Novo Array com os Resultados de uma Função:**

let dobrado = meuArray.map(item => item * 2);
console.log("Array dobrado:", dobrado);
ole.log("Array dobrado:", dobrado);
   
// ----------------------------------------------------------------------
9. **Reduzir o Array a um Único Valor:**

let somado = meuArray.reduce((acc, curr) => acc + curr, 0);
console.log("Soma dos elementos:", somado);

// ----------------------------------------------------------------------
10. **Ordenar o Array:**

meuArray.sort((a, b) => a - b);
console.log("Array ordenado:", meuArray);

// ----------------------------------------------------------------------
11. **Copiar um Array (Shallow Copy):**

let copia = meuArray.slice();
console.log("Cópia do array:", copia);

// ----------------------------------------------------------------------
12. **Limpar um Array (Esvaziar):**

meuArray.length = 0;
console.log("Array após limpeza:", meuArray);

// ----------------------------------------------------------------------