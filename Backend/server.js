import express from 'express'

const app = express()
const port = 8000

app.listen(port, () => {
    console.log('Servern körs på http://localhost:8000/')
})
