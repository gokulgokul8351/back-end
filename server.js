// express
import express from 'express'
import todoRouter from './routes/todoRoutes.js'
import connectDB from './lip/db.js'
const app = express()
const PORT = 5000

// understanding json middleware
app.use(express.json())

//Database
connectDB()

// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Middlewares
app.use('/items', todoRouter)

// listing port
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`)
})
