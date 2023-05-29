import pkg from 'pg'
const { Client } = pkg
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

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
    port: process.env.DB_PORT || 5432
})

client.connect(function (err) {
    if (err) throw err
    console.log('Database connected')
})

app.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM flights'
        const result = await client.query(query)
        res.json(result.rows)
    } catch (error) {
        console.error('Error retrieving departures:', error)
        res.status(500).json({ error: 'An error occurred' })
    }
})

app.post('/bookings', async (req, res) => {
    const {
        destination,
        departure_date,
        adults,
        children,
        passenger_name,
        email,
        phone_number
    } = req.body

    try {
        const query =
            'INSERT INTO bookings (destination, departure_date, adults, children, passenger_name, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        await client.query(query, [
            destination,
            departure_date,
            adults,
            children,
            passenger_name,
            email,
            phone_number
        ])
        res.json({ message: 'Booking successful' })
    } catch (error) {
        console.error('Error inserting booking:', error)
        res.status(500).json({
            error: 'An error occurred while inserting the booking.'
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`)
})
