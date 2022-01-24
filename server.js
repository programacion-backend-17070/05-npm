const moment = require('moment');

function imprimaLaHora() {
  console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}

function tiempoDesdeNacimiento() {
  // formateado el dia de hoy y el de nacimiento
  const nac = moment("1992-08-06")
  const now = moment()
  const days = now.diff(nac, "days")
  const years = now.diff(nac, "years")
  console.log(`Desde mi nacimiento han pasado ${years} años`)
  console.log(`Desde mi nacimiento han pasado ${days} dias`)
}

// module.exports.imprimaLaHora = imprimaLaHora

module.exports = {
  imprimaLaHora,
  tiempoDesdeNacimiento
}