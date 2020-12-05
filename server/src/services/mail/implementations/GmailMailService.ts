  import nodemailer from 'nodemailer'

  import { ISendMail } from '../ISendMail'

class GMailService implements ISendMail{
  async sendMail(customer_email: string, customer_name: string){

    //Gmail Transporter config
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: 'nodemailertest12345678@gmail.com',
        pass: 'mailer12345678'
      }
    })

    // Mail template
    const mailData = {
      from: 'nodemailertest12345678@gmail.com',
      to: customer_email,
      subject: 'Congratulations, budget received successfully',
      text: `Hii, ${customer_name}, your budget was received successfully at ${new Date()}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam perferendis, ipsum neque earum cum vel, praesentium itaque accusantium saepe, possimus sapiente similique voluptatibus ratione ipsam vitae autem! Et, unde molestias?`
    }

    //Send Mail function
    transporter.sendMail(mailData)

    .then(() => { console.log('Email sended successfully !') })
    .catch((err) => { console.error(err) })
  }
}

export default new GMailService()