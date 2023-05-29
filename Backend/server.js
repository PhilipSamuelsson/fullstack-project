import pkg from 'pg'
const { Client } = pkg
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 8000
dotenv.config()


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
    client.query('SELECT * FROM flights', (error, results) => {
        if (error) {
            console.error('Error retrieving departures:', error)
            res.status(500).json({ error: 'An error occurred' })
        } else {
            res.json(results.rows)
        }
    })
})

app.post('/bookings', (req, res) => {
    const {
        destination,
        departure_date,
        adults,
        children,
        passenger_name,
        email,
        phone_number
    } = req.body

    // Insert the booking into the database
    client.query(
        'INSERT INTO bookings (destination, departure_date, adults, children, passenger_name, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [
            destination,
            departure_date,
            adults,
            children,
            passenger_name,
            email,
            phone_number
        ],
        (error) => {
            if (error) {
                console.error('Error inserting booking:', error)
                res.status(500).json({
                    error: 'An error occurred while inserting the booking.'
                })
            } else {
                res.json({ message: 'Booking successful' })
            }
        }
    )
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:8000/')
})
