import nodemailer from "nodemailer";

export default function handler(req, res) {
  const data = JSON.parse(req.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gamil.com",
    port: 587,
    auth: {
      user: "gm7847198@gmail.com",
      pass: "upirxzaaxrgfoiss",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let message = {
    from: "gm7847198@gmail.com",
    to: "ghulamhafeez.dev@gmail.com",

    subject: `Hello World`,

    html: `
        <div><strong>Name:</strong> ${data.name}</div>
        <br/>
        <div><strong>Email:</strong> ${data.email}</div>
        <br/>
        <div><strong>Phone:</strong> ${data.phone}</div>
        <br/>
        <div><strong>Enquiry:</strong> ${data.enquiry}</div>
       `,
  };
  transporter
    .sendMail(message)
    .then((response) => {
      console.log("response", response);
      res.status(200).json("Ok");
    })
    .catch((error) => {
      console.log("Error :", error);
      res.status(401).json(error);
    });

  // res.status(200).json(req.body);
}
