  import { IBudget } from '@interfaces/IBudget'

export interface IBudgetRepository{
  findBudgets(): Promise<IBudget[]>
  createBudget(budget: IBudget): Promise<IBudget>
}