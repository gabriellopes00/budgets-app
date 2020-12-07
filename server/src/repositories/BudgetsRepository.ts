import BudgetsModel from '@models/Budgets'

import { IBudget } from '@interfaces/IBudget'
import { IBudgetRepository } from './IBudgetRepository'

class BudgetsRepository implements IBudgetRepository  {

  async findBudgets(){
    try {
      const budgets = await BudgetsModel.find()
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

  //Only used in the development environment
  async deleteBudget(budget: string){
    try {
      await BudgetsModel.findByIdAndDelete(budget)
    } catch (error) {
       throw Error(error)
    }
   }

}

export default new BudgetsRepository()