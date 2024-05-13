class Carta {
    constructor(valor, naipe, posição) {
        this.valor = valor;
        this.naipe = naipe;
        this.posição = posição;
    }

    verCarta() {
        console.log(this.valor, this.naipe);
    }

    virarCarta() {
        this.posição = 1;
    }
}

var carta = new Carta (5, 'Copas', 1)

console.log(carta.verCarta())