export interface IMail{
  from: string  /* budget company email */
  to: string, /* client email */
  subject: string,  /* mail subject */
  text: string  /* mail body */
}

export interface IMailProvider{
  sendMail(customer_email: string, customer_name: string): Promise<void>
}