import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connect } from './database/connection.js'
import router from './router/route.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')
app.use(cookieParser())

app.use('/api',router)

const port = 8000

app.get('/', (req,res) => {
    res.status(201).json("Home Get Request")
})

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log('Cannot start the server')
    }
}).catch(error => {
    console.log('invalid database connection')
})

