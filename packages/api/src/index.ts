import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import { getProduct } from './routes/get-product'
import { getProducts } from './routes/get-products'

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/api/items/:id', getProduct)
app.use('/api/items', getProducts)

const port = '4000'

app.listen(port)
