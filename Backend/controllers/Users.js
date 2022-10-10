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
 * Users.js
 * - Maneja requests de manejo de usuarios
 *********************************************/

// Imports
const pg = require('pg')
const conString = require('./key/conString')

// Routes

const checkNewUser = (req, res) => {
  console.log('\n> post request /checkNewUser with body:\n', req.body)
  const sql = `SELECT * FROM users WHERE username = '${req.body.username}'`
  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      if (err) return console.error('error running query', err)

      client.end()
      res.json({
        userExist: result.rows.length > 0,
      })
    })
  })
}

const register = (req, res) => {
  console.log('\n> post request /register with body:\n', req.body)
  const sql = `
  INSERT INTO users (name, lastname, username, email, user_password, gender, create_date, administrador, habilitado) 
  VALUES (
    '${req.body.name}', 
    '${req.body.lastname}', 
    '${req.body.username}', 
    '${req.body.email}', 
    '${req.body.password}', 
    ${parseInt(req.body.gender)}, 
    '${req.body.date}',
    ${req.body.admin},
    true
  )`

  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      client.end()
      if (err) {
        console.error('error running query', err)
        res.json({ success: false })
      }
      res.json({ success: true })
    })
  })
}

const login = (req, res) => {
  console.log('\n> post request /login with body:\n', req.body)
  const sql = `
  SELECT * FROM users WHERE username = '${req.body.username}' 
  AND user_password = '${req.body.password}'`

  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      if (err) return console.error('error running query', err)

      client.end()
      res.json({
        userExist: result.rows.length > 0,
        username: result.rows,
      })
    })
  })
}

const checkLogin = (req, res) => {
  console.log('\n> post request /checkLogin with body:\n', req.body)
  const sql = `
  INSERT INTO login_fails (username, password, failtime) 
  VALUES (
    '${req.body.username}', 
    '${req.body.password}',
    CURRENT_TIMESTAMP
  )`

  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      client.end()
      if (err) {
        res.json({ success: false })
        return console.error('error running query', err)
      }
      res.json({ success: true })
    })
  })
}

const getSellerId = (req, res) => {
  console.log('\n> POST request /getSellerId with body: ', req.body)
  const sql = `
      SELECT id_usuario FROM item i
      WHERE i.id like '${req.body.idItem}'
      LIMIT 1`

  console.log(sql)
  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      if (err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }

      client.end()
      res.json({
        succes: true,
        items: result.rows,
      })
    })
  })
}

const registerVisit = (req, res) => {
  console.log('\n> POST request /registerVisit with body: ', req.body)
  const sql = `
    INSERT INTO public.visits
    (username, visiting_time)
    VALUES('${req.body.username}', CURRENT_TIMESTAMP);  
  `
  console.log(sql)

  const client = new pg.Client(conString)

  client.query(sql, (err, result) => {
    if (err) {
      client.end()
      res.json({ succes: false })
      return console.error('error running query', err)
    }

    client.end()
    res.json({
      succes: true,
    })
  })
}

const deleteUser = (req, res) => {
  console.log('\n> Post request /deleteUser')
  const sql = `
    DELETE FROM users u WHERE u.username = '${req.body.username}'
  `
  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      if (err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }

      client.end()
      res.json({ succes: true })
    })
  })
}

// Exports
module.exports = {
  checkNewUser,
  register,
  login,
  checkLogin,
  deleteUser,
  getSellerId,
  registerVisit,
}
