import * as controller from './modulos/controller.js'
import chalk from "chalks"

console.log(chalk.green(controller.multiplica(controller.suma(1, 2), controller.suma(4, 5))));