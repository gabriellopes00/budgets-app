export interface IMail{
  from: string
  to: string,
  subject: string,
  text: string
}

export interface IMailProvider{
  sendMail(customer_email: string, customer_name: string): Promise<void>
}