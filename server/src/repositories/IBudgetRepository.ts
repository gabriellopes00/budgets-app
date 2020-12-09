  import { IBudget } from '@interfaces/IBudget'

export interface IBudgetRepository{
  findAll(): Promise<IBudget[]>
  create(budget: IBudget): Promise<IBudget>
}