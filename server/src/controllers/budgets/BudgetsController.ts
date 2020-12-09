import { Request, Response } from 'express'

import { IBudgetsController } from './IBudgetsController'
import { BudgetsValidator } from '@validators/BudgetsValidator'

import { IBudget } from '@interfaces/IBudget'

import budgetsRepository from '@repositories/BudgetsRepository'

import MailtrapMailService from '@mails/implementations/MailtrapMailService'
// import GmailMailService from '@mails/implementations/GmailMailService'

class BudgetsController implements IBudgetsController {

  // Budget listing function
  async index(req: Request, res: Response){
    try {
      const budgets = await budgetsRepository.findAll()
      return res.status(200).json(budgets)
    } catch {
      return res.sendStatus(500)
    }
  }

  // Budget registration function
  async store(req: Request, res: Response): Promise<Response>{
    try {
      const budget:IBudget  = req.body
      await BudgetsValidator.validate(budget)

      await budgetsRepository.create(budget)

      await MailtrapMailService.sendMail(
        budget.customer_email,
        budget.customer_name
      )
      return res.sendStatus(201)

    } catch{
      return res.sendStatus(400)

    }
  }

  //Used in the development environment --> This function will delete all budgets registered
  async destroy(req: Request, res: Response): Promise<Response>{
    try {
      const budgets = await budgetsRepository.findAll()
      budgets.forEach(async budget => await budgetsRepository.delete(budget.id))
      return res.sendStatus(200)

    } catch{
      return res.sendStatus(400)

    }
  }
}

export default new BudgetsController()