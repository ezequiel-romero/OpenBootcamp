function fibonacci (num) {
    if (num === 1) return [1]
    if (num === 2) return [1, 1]
    let resultado = [1 , 1]
    for (let i = 2; i < num; i++) {
        let numero = resultado[i - 1] + resultado[i - 2]
        resultado = [...resultado, numero]
    }
    return resultado
}

console.log(fibonacci(10))