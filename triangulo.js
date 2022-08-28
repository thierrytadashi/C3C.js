function triangulo(var1, var2, var3) {
    var lado1 = var1;
    var lado2 = var2;
    var lado3 = var3;
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado < lado1 + lado2) {
      if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilatero';
      } else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
        return 'Isóceles';
      } else {
        return 'Escaleno';
      }
    }
  }