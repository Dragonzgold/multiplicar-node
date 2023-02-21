const argv = require("./config/yargs").argv;
const colors = require('colors');
const { multiplicar, listarNumero } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarNumero(argv.base, argv.limite)
    .then(mensaje => console.log(`${mensaje}`))
    .catch(err => console.log(err))


    break;
  case "crear":
    multiplicar(argv.base, argv.limite)
    .then(mensaje => console.log(`Archivo creado: ${mensaje}`))
    .catch(err => console.log(err));

    break;
  default:
    console.log("Comando no reconocido");
}

// console.log(argv)

// console.log('Base: ', argv.base)

