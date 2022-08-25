
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Azúcar", "Leche", "Manzanas", "Huevos", "Jabón"]
console.log(listaCompras)

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol")
console.log(listaCompras)

// Modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop()
console.log(listaCompras)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    { titulo: "Drive", director: "Nicolas Winding Refn", fecha: 2011},
    { titulo: "Into the Wild", director: "Sean Penn", fecha: 2007},
    { titulo: "Interstellar", director: "Christopher Nolan", fecha: 2014}
]
console.log(peliculasFavoritas)

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pre2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha < 2010)
console.log(pre2010)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map(pelicula => pelicula.director)
console.log(directores)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map(pelicula => pelicula.titulo)
console.log(titulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresTitulos = directores.concat(titulos)
console.log(directoresTitulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresTitulosPropagacion = [...directores, ...titulos]
console.log(directoresTitulosPropagacion)