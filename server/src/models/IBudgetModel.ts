import { Document } from 'mongoose'

export interface IBudgetModel extends Document {
  customer_name: string
  customer_email: string
  customer_phone: number
  subject: string
  body: string
}