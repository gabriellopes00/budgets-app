import { model, Schema } from 'mongoose'
import { IBudgetRepository } from '@interfaces/IBudget'

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

export default model<IBudgetRepository>('BudgetsModel', budgetsSchema)