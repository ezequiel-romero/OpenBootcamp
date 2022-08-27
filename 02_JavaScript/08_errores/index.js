// Instala la dependencia Winston
const logger = require('./logger');

// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function throwError() {
    throw new Error("Esto es un error")
}

// Registra el error en un archivo a través de un try...catch
try {
    throwError()
} catch(e) {
    logger.error(e)
}