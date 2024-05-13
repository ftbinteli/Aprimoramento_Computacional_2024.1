const precoMaca = 2
const precoBanana = 1.5
const precoLaranja = 3
const precoPera = 2.5

var quantidadeMaca = 10
var quantidadeBanana = 5
var quantidadeLaranja = 3
var quantidadePera = 2

var totalMaca = precoMaca * quantidadeMaca
var totalBanana = precoBanana * quantidadeBanana
var totalLaranja = precoLaranja * quantidadeLaranja
var totalPera = precoPera * quantidadePera

var totalCompra = totalMaca + totalBanana + totalLaranja + totalPera

// Se a quantidade de bananas for maior ou igual a 10, a banana ganha um desconto 
if (quantidadeBanana >= 10){

    precoBanana = 1.5
    
}

console.log("O total da compra é: " + totalCompra)