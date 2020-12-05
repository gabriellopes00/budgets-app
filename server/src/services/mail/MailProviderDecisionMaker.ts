  import MailtrapMailService from './implementations/MailtrapMailService'
  import GmailMailService from './implementations/GmailMailService'

export async function SendMail(customer_email: string, customer_name: string){
  if(customer_email.indexOf('@gmail.com') != -1)
    await GmailMailService.sendMail(customer_email, customer_name)
  else
    await MailtrapMailService.sendMail(customer_email, customer_name)
}