import mongoose from 'mongoose'

const connection = mongoose.connect(
  'mongodb://localhost:27017/budgetsapi', // mongodb url
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Mongodb connected successfully...'))
.catch(err => {
  console.error(err)
})

export default connection