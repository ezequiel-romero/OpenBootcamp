// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: 'Ezequiel',
    apellido: 'Romero',
    edad: 32,
    altura: 175,
    eresDesarrollador: true
}
console.log(datosPersonales)

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad
console.log(edad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const conjuntoDatos = [
    {
        ...datosPersonales
    },
    {
        nombre: 'Diego',
        apellido: 'Rivas',
        edad: 33,
        altura: 180,
        eresDesarrollador: false
    },
    {
        nombre: 'Rodrigo',
        apellido: 'Perez',
        edad: 31,
        altura: 172,
        eresDesarrollador: true
    }
]
console.log(conjuntoDatos)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const conjuntoDatosOrdenados = conjuntoDatos.sort((a, b) => a.edad - b.edad)
console.log(conjuntoDatosOrdenados)
