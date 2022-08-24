// Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 175
console.log("file: Untitled-1 / line 3 / alturaCm", alturaCm)

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMt = 1.75
console.log("file: Untitled-1 / line 6 / alturaMt", alturaMt)

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 70.5
console.log("file: Untitled-1 / line 11 / pesoKg", pesoKg)

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaTop = Math.ceil(alturaMt)
console.log("file: Untitled-1 / line 15 / alturaTop", alturaTop)

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoBot = Math.floor(pesoKg)
console.log("file: Untitled-1 / line 19 / pesoBot", pesoBot)

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al "máximo valor que se puede obtener en Javascript"
let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log("file: Untitled-1 / line 23 / sonIguales", sonIguales)