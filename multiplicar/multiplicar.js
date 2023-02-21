//requireds
const fs = require("node:fs");
const colors = require('colors');


let listarNumero = (base, limite) => {

    console.log("===========".red)
    console.log(`Tabla del ${base}`.green)
    console.log("===========\n".red)

  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`Usted no introdujo un numero. Introdujo: ${base}`);
      return;
    }
    if (!Number(limite)) {
      reject(`Usted no introdujo un numero. Introdujo: ${limite}`);
      return;
    }

    for (let i = 1; i <= limite; i++) {
      console.log(`${base} * ${i} = ${base * i}`);
    }
  });
};

let multiplicar = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`Usted no intodujo un numero. Introdujo: ${base}`.red);
      return;
    }

    if (!Number(limite)) {
        reject(`Usted no intodujo un numero. Introdujo: ${limite}`.red);
        return;
      }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base} & limite-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base} & limite-${limite} ha sido creada`.green);
    });
  });
};

module.exports = {
  multiplicar,
  listarNumero,
};
