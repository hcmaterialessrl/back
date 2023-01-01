import { pool } from "../db.js";
import nodemailer from "nodemailer"

export const sendMail = async (req, res) => {
  try {
    const email = req.body.email
    const product = req.body.product
    const productId = req.body.productId
    console.log(productId)
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "june89@ethereal.email",
          pass: `5zA7d1aRag1SYTnYZ6`,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      let contentHTML = `
      <img src = "https://res.cloudinary.com/dqdmm93bn/image/upload/v1668041773/hcmaterialessrc/hc2_fk2eyo.png" style="width:100px;"/>
    
      <h1>Hola!, me gustaría saber el precio del producto: ${product} - id: ${productId}`;
  
      let info = await transporter.sendMail({
        from: email,
        to: "hcmateriales@outlook.com",
        subject: "Bienvenido",
        html: contentHTML,
      });

      console.log("message sent", info.messageId);
  } catch (error) {
    console.log(error);
  }
};