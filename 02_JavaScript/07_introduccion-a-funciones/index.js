// Una función sin parámetros que devuelva siempre "true"
// const alwaysTrue = (v) => true
function verdadero() {
    return true
}
console.log(verdadero())

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function myPromise() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
const promesa = myPromise()
console.log(promesa)


// Una función generadora de índices pares automáticos
function* idEven() {
    let id = 0
    while(true) {
        id += 2
        yield id
    }
}
const generarPar = idEven()
console.log(generarPar.next().value)
console.log(generarPar.next().value)
console.log(generarPar.next().value)
console.log(generarPar.next().value)
console.log(generarPar.next().value)
console.log(generarPar.next().value)