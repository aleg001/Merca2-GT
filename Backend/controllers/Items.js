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
 * Items.js
 * - Maneja requests de manejo de Items
 *********************************************/

// Imports
const pg = require('pg')
const conString = require('./key/conString')

// Routes

const getItems = (req, res) => {
  console.log('\n> GET request /getItems')
  const sql = `
    SELECT * FROM item i
    LEFT JOIN denunciado d ON i.id = d.item_id
    WHERE d.item_id IS NULL`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ 
        succes:true,
        items: result.rows
      })
    })
  })
}

const getSelectedItem = (req, res) => {
  console.log('\n> POST request /getSelectedItem with body: ', req.body)
  const sql = `
    SELECT * , to_char(post_time,'HH24:MI') as HOUR FROM item i
    LEFT JOIN denunciado d ON i.id = d.item_id
    WHERE d.item_id IS NULL AND i.id = '${req.body.id}'`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ 
        succes:true,
        items: result.rows,
      })
    })
  })
}

const getSellerName = (req, res) => {
  console.log('\n> POST request /getSellerName with body: ', req.body)
  const sql = `
    SELECT name, lastname FROM users WHERE username = '${req.body.id}'`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ 
        succes:true,
        user: result.rows,
      })
    })
  })
}

const getSellerPic = (req, res) => {
  console.log('\n> POST request /getSellerPic with body: ', req.body)
  const sql = `
    SELECT profile_pic FROM users WHERE username = '${req.body.id}'`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ 
        succes:true,
        user: result.rows,
      })
    })
  })
}

const addItem = (req, res) => {
  console.log('\n> Post request /addItem with body:\n', req.body)
  const sql = `
  INSERT INTO item VALUES (
    '${req.body.id}',
    '${req.body.itemName}',
    '${req.body.categoryId}',
    '${req.body.description}',
    ${req.body.price},
    '${req.body.username}',
    '${req.body.ubicacion}',
    CURRENT_TIMESTAMP,
    '${req.body.rating}'
  )`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ succes: true })
    })
  })
}

const deleteItem = (req, res) => {
  console.log('\n> Post request /deleteItem with body:\n', req.body)
  const sql = `
  DELETE FROM item i
  WHERE i.id = '${req.body.itemId}'`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ succes: true })
    })
  })
}

const filterItemsCat = (req, res) => {
  console.log('\n> Post request /filterItemsCat with body:\n', req.body)
  
  const sql = `
    SELECT * FROM item i 
    WHERE i.id_cat = '${req.body.category}'`
  
  const client = new pg.Client(conString)

  client.connect((err) => {
    if(err) return console.error('could not connect to postgres', err)
    
    client.query(sql, (err, result) => {
      if(err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }
      
      client.end()
      res.json({ 
        succes: true,
        areItems: result.rows.count > 0,
        items: result.rows,
      })
    })
  })
}

// Exports
module.exports = {
  getItems,
  getSelectedItem,
  getSellerName,
  getSellerPic,
  addItem,
  deleteItem,
  filterItemsCat
}