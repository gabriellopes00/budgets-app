  import { Request, Response } from 'express'

export interface IBudgetsController{
  index(req: Request, res: Response): Promise<Response>
  store(req: Request, res: Response): Promise<Response>
}