import nodemailer from "nodemailer";

export default function handler(req, res) {
  const data = JSON.parse(req.body);

  // if (req.method === "POST") {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gamil.com",
    port: 587,
    auth: {
      user: "baleesha01@gmail.com",
      pass: "yydoqsfjmlkepnxr",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let message = {
    from: "baleesha01@gmail.com",
    to: "ghulamhafeez.dev@gmail.com",

    subject: `Hello World`,
    // template: "email",

    // text: req.body.values.message + " | Sent from: " + req.body.values.email,
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
    })
    .catch((error) => {
      console.log("Error :", error);
    });
  // }
  res.status(200).json(req.body);
}
