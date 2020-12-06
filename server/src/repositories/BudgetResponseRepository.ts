import BudgetsResponseModel from '@models/BudgetResponse'

import { IResponse } from '@interfaces/IResponse'
import { IBudgetRepository } from './IBudgetRepository'

class BudgetsResponseRepository /* implements IBudgetRepository */ {

  async findResponses(){
    try {
      const responses = await BudgetsResponseModel.find()
      return responses
    } catch (error) {
      throw Error(error)
    }
  }

  async createResponse(response: IResponse){
    try {
      const newResponse = await BudgetsResponseModel.create(response)
      return newResponse
    } catch (error) {
        throw Error(error)
    }
  }

}

export default new BudgetsResponseRepository()