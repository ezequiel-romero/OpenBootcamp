// Una cadena de texto con Nombre
let nombre = 'Ezequiel'
console.log(nombre)

// Una cadena de texto con Apellido
let apellido = 'Romero'
console.log(apellido)

// Una cadena de texto que se llame "estudiante" concatenando Nombre y Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLongitud = estudiante.length
console.log(estudianteLongitud)

// Una variable que contenga la primera letra del Nombre
let primeraLetraNombre = nombre.slice(0, 1)
console.log(primeraLetraNombre)

// Una variable que contenga la última letra del Apellido
let ultimaLetraApellido = apellido.slice(apellido.length - 1, apellido.length)
console.log(ultimaLetraApellido)

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteSinEspacio = estudiante.replace(/ /g,'')
console.log(estudianteSinEspacio)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let estudianteContieneNombre = estudiante.includes(nombre)
console.log(estudianteContieneNombre)