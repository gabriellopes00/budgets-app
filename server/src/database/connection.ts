import mongoose from 'mongoose'

const connection = mongoose.connect(
  'mongodb://localhost:27017/budgetsapi',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('mongodb connected successfully...'))
.catch(err => {
  console.error(err)
})

export default connection