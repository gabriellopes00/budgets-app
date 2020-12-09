import { model, Schema } from 'mongoose'
import { IBudgetModel } from './IBudgetModel'

const budgetsSchema = new Schema({
  customer_name: {
    type: String,
    required: true
  },
  customer_email: {
    type: String
  },
  customer_phone: {
    type: Number
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

export default model<IBudgetModel>('BudgetsModel', budgetsSchema)