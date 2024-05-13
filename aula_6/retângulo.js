

var quantidadeTinta = 0;

class Retangulo {
  constructor(tamanhoAltura, tamanhoLargura, nomeCor) {
    this.altura = tamanhoAltura;
    this.largura = tamanhoLargura;
    this.cor = nomeCor;
    this.area = tamanhoAltura * tamanhoLargura;
  }

  pintar() {
    quantidadeTinta += this.area;
  }
}

class Quadrado extends Retangulo {
  constructor(tamanhoLado, nomeCor) {
    super(tamanhoLado, tamanhoLado, nomeCor);
    this.lado = tamanhoLado;
  }
}

// subclass for Golden Rectangles, where the width is 1.6 times the height of the rectangle.
class RetanguloDourado extends Retangulo {
  constructor(tamanhoAltura, nomeCor) {
    super(tamanhoAltura, tamanhoAltura * 1.6, nomeCor);
  }
}


const retangulo3 = new Retangulo(5, 10, 'azul');
const quadrado1 = new Quadrado(5, 'amarelo');
const retangulo2 = new RetanguloDourado(5, 'vermelho');




retangulo3.pintar();
quadrado1.pintar();
retangulo2.pintar();

console.log(quantidadeTinta);





retangulo2.pintar();