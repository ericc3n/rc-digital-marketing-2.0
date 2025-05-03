import nodemailer from 'nodemailer';

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export class Message {
  email: string;
  name: string;
  message: string;

  constructor(email: string, name: string, message: string) {
    if (!isValidEmail(email)) {
      throw new Error("Email invalida");
    }
    this.email = email;
    this.name = name;
    this.message = message;
  }

  async send(): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_NAME as string,
          pass: process.env.EMAIL_PASS as string,
        },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_NAME,
        to: process.env.EMAIL_NAME,
        subject: `Messagio da ${this.name}`,
        text: `Nome: ${this.name}\nEmail: ${this.email}\nMessaggio: ${this.message}`,
      });
      console.log("Email inviata con successo")
    } catch (error) {
      console.error("Errore nell'invio dell'email: ", error)
    }
  }
}
