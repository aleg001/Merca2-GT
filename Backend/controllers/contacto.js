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
 * contacto.js
 * - Maneja requests de contacto con vendedor
 *********************************************/

// Imports
const pg = require('pg')
const conString = require('./key/conString')

// Routes

const dataVendedor = (req, res) => {  
  console.log('\n> post request /dataVendedor with body:\n', req.body)
  
  const sql = `
  SELECT (u."name" || ' ' || u.lastname) AS nombreVendedor, u.telefono
	FROM item i
	JOIN users u ON u.username = i.id_usuario 
	WHERE i.id = '${req.body.itemID}'
  ;`

  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      client.end()
      if(err) {
        res.json({ success: false })
        return console.error('error running query', err)
      }
      const data = result.rows[0]
      res.json({ 
        nombre: data.nombrevendedor,
        telefono: data.telefono,
      })
    })
  })
}

// Exports
module.exports = {
  dataVendedor,
}