  import BudgetsModel from '@models/Budgets'

  import { IBudget } from '@interfaces/IBudget'
  import { IBudgetRepository } from './IBudgetRepository'

class BudgetsRepository /* implements IBudgetRepository */ {

  async findBudgets(){
    try {
      const budgets = BudgetsModel.find()
      return budgets
    } catch (error) {
      throw Error(error)
    }
  }

  async createBudget(budget: IBudget){
   try {
    const newBudget = await BudgetsModel.create(budget)
    return newBudget
   } catch (error) {
      throw Error(error)
   }
  }

}

export default new BudgetsRepository()