import express from 'express'
import apiRoute from './apiRoute'
import cors from 'cors'
const app = express()

const PORT = 8080

app.use(cors())

app.get('/', (req, res) => {
	res.send(`hello World test`)
})

app.use('/api', apiRoute)

app.listen(PORT, () => {
	console.log(`open on: ${PORT}`)
})
