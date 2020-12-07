import { Request, Response } from 'express'
import { IBudget } from '@interfaces/IBudget'

export interface IBudgetsController{
  index(req: Request, res: Response): Promise<Response>
  store(req: Request, res: Response): Promise<Response>
  answer(req: Request, res: Response): Promise<Response>
}