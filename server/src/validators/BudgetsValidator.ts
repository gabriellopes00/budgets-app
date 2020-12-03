  import * as Yup from 'yup'

export const BudgetsValidator = Yup.object().shape({
  customer_name: Yup.string().required().min(1),
  customer_email: Yup.string().required().email().min(1),
  customer_phone: Yup.number().required(),
  subject: Yup.string().required().min(1),
  body: Yup.string().required().min(1)
})