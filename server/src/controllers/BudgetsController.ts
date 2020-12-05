  import { Request, Response } from 'express'

  import { IBudgetsController } from './IBudgetsController'
  import { IBudget } from '@interfaces/IBudget'
  import budgetsRepository from '@repositories/BudgetsRepository'
  import { BudgetsValidator } from '@validators/BudgetsValidator'

  import MailtrapMailService from '@mails/implementations/MailtrapMailService'
  /* import GmailMailService form '@mails/implementations/GmailMailService */

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
}

export default new BudgetsController()