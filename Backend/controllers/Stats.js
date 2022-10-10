/*********************************************
 * Universidad del Valle de Guatemala
 * Merca2 GT
 * Autores:
 *  Alejandro Gómez
 * 	Marco Jurado
 *  Diego Córdova
 * 	Paola de León
 * 	Paola Contreras
 *
 * Stats.js
 * - Maneja estadisticas de la plataforma
 *********************************************/

// Imports
const pg = require('pg')
const conString = require('./key/conString')

// Routes
const totalUsersStat = () => {
  console.log('\n> post request total users\n')
  const sql = `
    SELECT COUNT(*) FROM "public"."users" 
        `

  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      client.end()
      if (err) {
        console.error('error running query', err)
        res.json({ succes: false })
      }
      res.json({ succes: true })
    })
  })
}

// Exports
module.exports = {
  totalUsersStat,
}

