import BudgetsModel from '@models/Budgets'

import { IBudget } from '@interfaces/IBudget'
import { IBudgetRepository } from './IBudgetRepository'

class BudgetsRepository implements IBudgetRepository  {

  async findAll(){
    try {
      const budgets = await BudgetsModel.find()
      return budgets
    } catch (error) {
      throw Error(error)
    }
  }

  async create(budget: IBudget){
   try {
    const newBudget = await BudgetsModel.create(budget)
    return newBudget
   } catch (error) {
      throw Error(error)
   }

  }

  //Used in the development environment
  async delete(budget: string){
    try {
      await BudgetsModel.findByIdAndDelete(budget)
    } catch (error) {
       throw Error(error)
    }
   }

}

export default new BudgetsRepository()