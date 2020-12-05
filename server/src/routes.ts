  import { Router } from 'express'

  import BudgetsController from './controllers/BudgetsController'

const router = Router()

router.get('/', BudgetsController.index)
router.post('/', BudgetsController.store)
router.delete('/', BudgetsController.destroy) //Only used in the development environment

export default router