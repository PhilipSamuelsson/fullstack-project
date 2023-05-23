const { Client } = pkg
import { config } from 'dotenv'
import pkg from 'pg'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 8000

config()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

// Create a PostgreSQL connection pool
const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

client.connect(function (err) {
    if (err) throw err
    console.log('database connected')
})

app.get('/destinations', (req, res) => {
    // Retrieve all destinations from the database
    client.query('SELECT * FROM destinations', (error, results) => {
        if (error) {
            console.error('Error retrieving destinations:', error)
            res.status(500).json({ error: 'An error occurred' })
        } else {
            res.json(results.rows)
        }
    })
})

app.post('/bookings', (req, res) => {
    const { name, email, destination } = req.body

    // Insert the booking into the database
    client.query(
        'INSERT INTO bookings (name, email, destination) VALUES ($1, $2, $3)',
        [name, email, destination],
        (error) => {
            if (error) {
                console.error('Error inserting booking:', error)
                res.status(500).json({ error: 'An error occurred' })
            } else {
                res.json({ message: 'Booking successful' })
            }
        }
    )
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:8000/')
})
