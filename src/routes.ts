  import { Router } from 'express'

  import BudgetsController from './controllers/BudgetsController'

const router = Router()

router.get('/', BudgetsController.index)
router.post('/', BudgetsController.store)

export default router