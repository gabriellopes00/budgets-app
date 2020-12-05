  import nodemailer from 'nodemailer'

  import { IMailProvider } from '../ISendMail'

class MailtrapMailService implements IMailProvider{

  async sendMail(customer_email: string, customer_name: string){

    //Mailtrap Transporter config
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "1007df74c11f12",
        pass: "a7e5cd78bae481"
      },
    })

    // Mail template
    const mailData = {
      from: '3833e589e3-b9a8f7@inbox.mailtrap.io',
      to: customer_email,
      subject: 'Congratulations, budget received successfully',
      text: `Hii, ${customer_name}, your budget was received successfully at ${new Date()}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam perferendis, ipsum neque earum cum vel, praesentium itaque accusantium saepe, possimus sapiente similique voluptatibus ratione ipsam vitae autem! Et, unde molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam perferendis, ipsum neque earum cum vel, praesentium itaque accusantium saepe, possimus sapiente similique voluptatibus ratione ipsam vitae autem! Et, unde molestias?`,
    }

    //Send Mail function
    transporter.sendMail(mailData)

    .then(() => { console.log('Email sended successfully !') })
    .catch((err) => { console.error(err) })
  }
}

export default new MailtrapMailService()