import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import personRoutes from './routes/personRoutes.js'
import patientRoutes from './routes/patientRoutes.js'
import hospitalRoutes from './routes/hospitalRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.use('/api/persons', personRoutes)
app.use('/api/patients', patientRoutes)
app.use('/api/hospitals', hospitalRoutes)
app.use('/api/departments', departmentRoutes)
app.use('/api/doctors', doctorRoutes)
app.use('/api/upload', uploadRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 80
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))