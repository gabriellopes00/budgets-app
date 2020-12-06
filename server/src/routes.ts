import { Router } from 'express'

import BudgetsController from '@controllers/budgets/BudgetsController'
// import ResponseController from '@controllers/responses/ResponseController'

const router = Router()

router.get('/', BudgetsController.index)
router.post('/', BudgetsController.store)
router.delete('/', BudgetsController.destroy) //Only used in the development environment

router.post('/response', BudgetsController.answer)
router.post('/response/list', BudgetsController.list) // temp

export default router