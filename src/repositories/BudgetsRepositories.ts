  import BudgetsModel from '../models/Budgets'

  interface IBudget{
    customer_name: string
    customer_email: string
    customer_phone: number
    subject: string
    body: string
  }

class BudgetsRepository {
  async getBudgets(){
    const budgets = BudgetsModel.find()
    return budgets
  }
  async createBudget(data: IBudget){
    const {
      customer_email,
      customer_phone,
      customer_name,
      subject,
      body
    } = data
    await BudgetsModel.create({
      customer_email,
      customer_phone,
      customer_name,
      subject,
      body
    })
  }
}

export default new BudgetsRepository()