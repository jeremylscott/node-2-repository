require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
const {getAll,getOne,update,create,deleteIt} = require('./products_controller')
app.use(json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('Database Connected');
}).catch(err => console.log(err))

const port = 3000

app.get('/api/products', getAll)
app.get('/api/products/:id', getOne)
app.put('/api/products/:id', update)
app.post('/api/products', create)
app.delete('/api/products/:id', deleteIt)


app.listen(port, () => {console.log(`Listening on port ${port}`)})