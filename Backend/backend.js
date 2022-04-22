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
 * backend.js
 * - Maneja el acceso a base de datos y Api
 *   para la aplicacion Merca2Gt
 *********************************************/

// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pg = require('pg')

// Conexion con base de datos
const conString = 'postgres://cjnkhxhk:0-qiJNzlV-_6cRq97WG1BaoPKmn9Jj0H@isilo.db.elephantsql.com/cjnkhxhk'

// Server para API
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.listen(8000, () => {
    console.log('Backend server Running in port 8008')
})

// Registro de nuevos usuarios
app.post('/checkNewUser', (req, res) => {

    const sql = `SELECT * FROM users WHERE username = '${req.body.username}'`
    const client = new pg.Client(conString)

	client.connect((err) => {
		if(err) return console.error('could not connect to postgres', err)
		
		client.query(sql, (err, result) => {
			if(err) return console.error('error running query', err)
            
            client.end()
			res.json({ 
				userExist: result.rows.length > 0
			})
		})
	})
})

app.post('/register', (req, res) => {

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
        )
	`

    const client = new pg.Client(conString)

    client.connect((err) => {
        if(err) return console.error('could not connect to postgres', err)

        client.query(sql, (err, result) => {
            client.end()
            if(err){
                console.error('error running query', err)
                res.json({ success: false })
            }
            res.json({ success: true })
        })
    })
})

app.post('/login', (req, res) => {

	const sql = `SELECT * FROM users WHERE username = '${req.body.username}' AND user_password = '${req.body.password}'`
	const client = new pg.Client(conString)

	client.connect((err) => {
		if(err) return console.error('could not connect to postgres', err)
		
		client.query(sql, (err, result) => {
			if(err) return console.error('error running query', err)

			
			client.end()
			res.json({
				userExist: result.rows.length > 0,
				username: result.rows
			})
		})
	})
})

app.post('/checkLogin', (req, res) => {  
		
	const sql = `
		INSERT INTO loginfails (username, user_password, time_of_fail) 
        VALUES (
            '${req.body.username}', 
            '${req.body.password}',
			CURRENT_TIMESTAMP
        )`
  
	const client = new pg.Client(conString)

	client.connect((err) => {
		if(err) return console.error('could not connect to postgres', err)
		
		client.query(sql, (err, result) => {
			client.end()
			if(err) {
				res.json({ success: false })
				return console.error('error running query', err)
			}
			res.json({ success: true })
		})
	})
})
