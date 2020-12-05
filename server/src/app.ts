  import express from 'express'
  import cors from 'cors'

  import budgetsRouter from './routes'
  import './database/connection'

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3030' }))

app.use('/budgets', budgetsRouter)

const port = 5050
app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})