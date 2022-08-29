// Sesión 4 - Strings (cadenas de caracteres)
const str_sng = "Hola soy un texto con comillas simples"
const str_dbl = "Hola soy un texto con comillas dobles"

console.log(str_sng)
console.log(str_dbl)

const str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
const str_comillas_simples = "El otro día me dijo literalmente \"ve a sacar la basura\""
const str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
const str_comillas_simples_2 = "El otro día me dijo literalmente 've a sacar la basura'"

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

/// /// Comillas invertidas (backticks)
const str_backticks = "Hola esto es un string con backticks"

console.log(str_backticks)

const nombre = "Iñigo"
const saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantillas HTML
const plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`

console.log(plantilla)

/// / Introducción de variables en html
const libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]
