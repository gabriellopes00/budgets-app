  import { Request, Response } from 'express'

  import { IBudget } from '../interfaces/IBudget'
  import { IBudgetsController } from './IBudgetsController'

  import budgetsRepository from '../repositories/BudgetsRepository'
  import mailService from '../services/mail/MailtrapMailService'

class BudgetsController implements IBudgetsController {

  // User search function
  async index(req: Request, res: Response){
    try {
      const budgets = await budgetsRepository.findBudgets()
      return res.json(budgets)
    } catch (error) {
      console.error(error);
      return res.sendStatus(500)
    }
  }

  // User registration function
  async store(req: Request, res: Response): Promise<Response>{
    try {
      const data:IBudget  = req.body
      await budgetsRepository.createBudget(data)

      mailService.sendMail(data.customer_email, data.customer_name)

      return res.sendStatus(201)
    } catch{
      return res.sendStatus(400)

    }
  }
}

export default new BudgetsController()