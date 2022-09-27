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
    where habilitado = true`

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

const getItemsUser = (req, res) => {
  console.log('\n> POST request /getItemsUser with body: ', req.body)
  const sql = `
    SELECT * FROM item i
    WHERE i.id_usuario = '${req.body.idUsuario}'`

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

const getSelectedItem = (req, res) => {
  console.log('\n> POST request /getSelectedItem with body: ', req.body)
  const sql = `
    SELECT * , to_char(post_time,'HH24:MI') as HOUR FROM item i
    LEFT JOIN denunciado d ON i.id = d.item_id
    WHERE d.item_id IS NULL AND i.id = '${req.body.id}'`

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

const getSellerName = (req, res) => {
  console.log('\n> POST request /getSellerName with body: ', req.body)
  const sql = `
    SELECT name, lastname FROM users u WHERE u.username = '${req.body.id}'`

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
        user: result.rows,
      })
    })
  })
}

const getProductPics = (req, res) => {
  console.log('\n> POST request /getProductPics with body: ', req.body)
  const sql = `
    SELECT imagen FROM item_partes WHERE id_item = '${req.body.id}'`

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
        pictures: result.rows,
      })
    })
  })
}

const getSellerPic = (req, res) => {
  console.log('\n> POST request /getSellerPic with body: ', req.body)
  const sql2 = `
  SELECT profile_pic 
  FROM users 
  WHERE username = '${req.body.id_usuario}'`

  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql2, (err, result) => {
      if (err) {
        client.end()
        res.json({ succes: false })
        return console.error('error running query', err)
      }

      client.end()
      res.json({
        succes: true,
        pictures: result.rows,
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
    '${req.body.id_usuario}',
    '${req.body.ubicacion}',
    CURRENT_TIMESTAMP,
    '${req.body.rating}',
    '${req.body.image}',
    true
  )`

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

const addItemPartes = (req, res) => {
  console.log('\n> Post request /addItempartes with body:\n', req.body)
  const sql = `
  INSERT INTO item_partes VALUES (
    '${req.body.id_item}',
    '${req.body.imagen}'
  )`

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

//cambios realizados. Verificar.
const deleteItem = (req, res, itemId) => {
  console.log('\n> Post request /deleteItem with body:\n', req.body)
  const sql = `
  DELETE FROM item i
  WHERE i.id = '${req.body.itemId}'`

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

const filterItemsCat = (req, res) => {
  console.log('\n> Post request /filterItemsCat with body:\n', req.body)

  const sql = `
    SELECT * FROM item i 
    WHERE i.id_cat = '${req.body.category}'`

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
        areItems: result.rows.count > 0,
        items: result.rows,
      })
    })
  })
}

const getCategoryItems = (req, res) => {
  console.log('\n> POST request /getCategoryItems with body: ', req.body)
  const sql = `
    SELECT * FROM item i
    LEFT JOIN denunciado d ON i.id = d.item_id
    WHERE d.item_id IS null
    and i.id_cat = '${req.body.id_cat}'`

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

const getCategory = (req, res) => {
  console.log('\n> POST request /getCategory with body: ', req.body)
  const sql = `
    SELECT * FROM categorias`

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
        user: result.rows,
      })
    })
  })
}

const reportItem = (req, res) => {
  console.log('\n> post request /report item with body:\n', req.body)
  const sql = `
  INSERT INTO denuncias 
  VALUES(
    '${req.body.denunciadoID}', 
    '${req.body.itemID}'
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

const disableItem = (req, res) => {
  console.log('\n> post request /disable item with body:\n', req.body)
  const sql = `
    UPDATE item 
    SET habilitado = false 
    WHERE item.id like '${req.body.itemID}'`

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

const recordVisitItem = (req, res) => {
  console.log('\n> post request /disable item with body:\n', req.body)
  const sql = `
    INSERT INTO public.visits_item
    (username, id_item, visiting_time)
    VALUES('${req.body.username}', '${req.body.id_item}', CURRENT_TIMESTAMP);
    `

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

const getCantItems = (req, res) => {
  console.log('\n> post request /getCantItems item with body:\n', req.body)
  const sql = `
    SELECT COUNT(*) FROM item WHERE id_usuario='$req.body.username'
    `
  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      client.end()
      if (err) {
        console.error('error running query', err)
        res.json({ success: false })
      }
      res.json({ 
        success: true,
        items: result.rows,
      })
    })
  })
}

const getCantViewsItem = (req, res) => {
  console.log('\n> post request /getCantViewsItem item with body:\n', req.body)
  const sql = `
    SELECT COUNT(*) FROM visits_item WHERE id_item='$req.body.id_item'
    `
  const client = new pg.Client(conString)

  client.connect((err) => {
    if (err) return console.error('could not connect to postgres', err)

    client.query(sql, (err, result) => {
      client.end()
      if (err) {
        console.error('error running query', err)
        res.json({ success: false })
      }
      res.json({ 
        success: true,
        items: result.rows,
      })
    })
  })
}

// Exports
module.exports = {
  getItems,
  addItem,
  addItemPartes,
  deleteItem,
  getSellerPic,
  getSellerName,
  getProductPics,
  filterItemsCat,
  getSelectedItem,
  getItemsUser,
  getCategory,
  disableItem,
  reportItem,
  getCategoryItems,
  recordVisitItem,
  getCantItems,
  getCantViewsItem,
}
