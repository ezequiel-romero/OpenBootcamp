const nombre = "Ezequiel"
const apellido = "Romero"
const estudiante = {nombre, apellido}

// localStorage.setItem("persona", JSON.stringify(estudiante))
// sessionStorage.setItem("persona", JSON.stringify(estudiante))

const fechaActual = new Date()
// document.cookie = "estudiante=" + JSON.stringify(estudiante) + ";expires=" + new Date(fechaActual.getTime() + 2 * 60000)