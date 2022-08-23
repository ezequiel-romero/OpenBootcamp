// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let valor = 10
let i = valor - 1

while (true) {
    valor *= i
    i--
    if (i === 0) {
        break;
    }
}

console.log(valor)