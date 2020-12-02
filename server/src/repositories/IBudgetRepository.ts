  import { IBudget } from '../interfaces/IBudget'

export interface IBudgetRepository{
  findBudgets(): Promise<IBudget[]>
  createBudget(data: IBudget): Promise<IBudget>
}