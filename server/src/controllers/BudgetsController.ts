  import { Request, Response } from 'express'

  import { IBudget } from '@interfaces/IBudget'
  import { IBudgetsController } from './IBudgetsController'

  import budgetsRepository from '@repositories/BudgetsRepository'

  import MailtrapMailService from '@services/mail/MailtrapMailService'
  import GmailMailService from '@services/mail/GmailMailService'

  import { BudgetsValidator } from '@validators/BudgetsValidator'

class BudgetsController implements IBudgetsController {

  // User search function
  async index(req: Request, res: Response){
    try {
      const budgets = await budgetsRepository.findBudgets()
      return res.json(budgets)
    } catch {
      return res.sendStatus(500)
    }
  }

  // User registration function
  async store(req: Request, res: Response): Promise<Response>{
    try {
      const data:IBudget  = req.body
      await BudgetsValidator.validate(data)

      await budgetsRepository.createBudget(data)
      GmailMailService.sendMail(data.customer_email, data.customer_name)

      return res.sendStatus(201)

    } catch{
      return res.sendStatus(400)

    }
  }
}

export default new BudgetsController()