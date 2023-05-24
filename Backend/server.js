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

app.get('/', async (req, res) => {
    client.query('SELECT * FROM departures', (error, results) => {
        if (error) {
            console.error('Error retrieving departures:', error)
            res.status(500).json({ error: 'An error occurred' })
        } else {
            res.json(results.rows)
        }
    })
})

app.post('/bookings', (req, res) => {
    const { departureFrom, arrivalTo, date, length } = req.body //skapar varibler utifrån req.body (insomnia)

    // Skickar in bokningen i DB
    client.query(
        'INSERT INTO bookings (departure_from, arrival_to, date, length) VALUES ($1, $2, $3, $4)', // kommando till databasen som innehåller strukturen och definierar vart värdena ska in.
        [departureFrom, arrivalTo, date, length], // arrayen innehåller dem dynamiska värdena som kommunicerar med placeholders $1, $2, $3, och $4 i SQL statement.
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
