import { Request, Response } from 'express'

import { IBudgetsController } from './IBudgetsController'
import { BudgetsValidator } from '@validators/BudgetsValidator'

import { IBudget } from '@interfaces/IBudget'
import { IResponse } from '@interfaces/IResponse'

import budgetsRepository from '@repositories/BudgetsRepository'
import budgetResponseRepository from '@repositories/BudgetResponseRepository'

import MailtrapMailService from '@mails/implementations/MailtrapMailService'
import GmailMailService from '@mails/implementations/GmailMailService'

class BudgetsController implements IBudgetsController {

  // Budget list function
  async index(req: Request, res: Response){
    try {
      const budgets = await budgetsRepository.findBudgets()
      return res.json(budgets)
    } catch {
      return res.sendStatus(500)
    }
  }

  // Budget registration function
  async store(req: Request, res: Response): Promise<Response>{
    try {
      const budget:IBudget  = req.body
      await BudgetsValidator.validate(budget)

      await budgetsRepository.createBudget(budget)

      await MailtrapMailService.sendMail(
        budget.customer_email,
        budget.customer_name
      )
      return res.sendStatus(201)

    } catch{
      return res.sendStatus(400)

    }
  }

  //Answer budget function
  async answer(req: Request, res: Response): Promise<Response>{
    try {
      const response:IResponse = req.body
      await budgetResponseRepository.createResponse(response)
      return res.sendStatus(201)

    } catch  {
      return res.sendStatus(400)

    }
  }

  // temp
  async list(req: Request, res: Response): Promise<Response>{
    try {
      const responses = await budgetResponseRepository.findResponses()
      return res.json(responses)

    } catch  {
      return res.sendStatus(400)

    }
  }

  //Only used in the development environment
  async destroy(req: Request, res: Response): Promise<Response>{
    try {
      const { id } = req.body
      await budgetsRepository.deleteBudget(id)
      return res.sendStatus(200)

    } catch{
      return res.sendStatus(400)

    }
  }
}

export default new BudgetsController()