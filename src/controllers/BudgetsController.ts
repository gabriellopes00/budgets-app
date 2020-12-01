  import { Request, Response } from 'express'

  import { IBudget } from './IBudget'
  import budgetsRepository from '../repositories/BudgetsRepositories'
  import mailService from '../services/mail/SendMail'

class BudgetsController{
  async index(req: Request, res: Response): Promise<Response>{
    const budgets = await budgetsRepository.getBudgets()
    return res.json(budgets)
  }

  async store(req: Request, res: Response): Promise<Response>{
    try {
      const data:IBudget  = req.body
      await budgetsRepository.createBudget(data)

      mailService.sendMail(data.customer_email, data.customer_name)

      return res.sendStatus(201)
    } catch (error){

      return res.sendStatus(400)
    }
  }
}

export default new BudgetsController()