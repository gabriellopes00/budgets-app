import { Document } from 'mongoose'

export interface IBudgetRepository extends Document {
  customer_name: string
  customer_email: string
  customer_phone: number
  subject: string
  body: string
}

export interface IBudget {
  customer_name: string
  customer_email: string
  customer_phone: number
  subject: string
  body: string
}