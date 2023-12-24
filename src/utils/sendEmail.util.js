import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = (mailConfigurations) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: process.env.SMTP_PORT,
    service: 'gmail',
    secure: false,
    auth: {
      user: 'akshaywaghmarecc@gmail.com',
      pass:'oxhx wrjl fpne bduv',
    },
    debug: true,
  });

  if (process.env.NODE_ENV !== 'test') {
    transporter.sendMail(mailConfigurations, (error, info) => {
      if (error) {
        console.log('Error occurred while sending mail:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }

  return true;
};
