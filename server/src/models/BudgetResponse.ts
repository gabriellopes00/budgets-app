import { model, Schema } from 'mongoose'

const budgetsResponseSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  budget_id: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

export default model('BudgetsResponseModel', budgetsResponseSchema)