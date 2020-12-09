import { Router } from 'express'

import BudgetsController from '@controllers/budgets/BudgetsController'
// import ResponseController from '@controllers/responses/ResponseController'

const router = Router()

router.get('/', BudgetsController.index)
router.post('/', BudgetsController.store)
router.delete('/', BudgetsController.destroy) //Used in the development environment

export default router