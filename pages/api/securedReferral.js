import nodemailer from "nodemailer";
import { FIRST_PATH } from "../../constants/Constant";
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
    <div><strong>First Name:</strong> ${data.firstName}</div>
    <br/>  <div><strong>Sur Name:</strong> ${data.surName}</div>
    <br/>  <div><strong>Email:</strong> ${data.email}</div>
    <br/>  <div><strong>Day Phone:</strong> ${data.dayPhone}</div>
    <br/>  <div><strong>Address:</strong> ${data.address}</div>
    <br/>  <div><strong>Atreet Address:</strong> ${data.streetAddress}</div>
    <br/>  <div><strong>City:</strong> ${data.city}</div>
    <br/>  <div><strong>State:</strong> ${data.state}</div>
    <br/>  <div><strong>Zip Code:</strong> ${data.zipCode}</div>
    <br/>  <div><strong>Guardian Name:</strong> ${data.guardianName}</div>
    <br/>  <div><strong>Relation Patient:</strong> ${data.relationPatient}</div>
    <br/>  <div><strong>Dentist Name:</strong> ${data.dentistName}</div>
    <br/>  <div><strong>Dentist Phone:</strong> ${data.dentistPhone}</div>
    <br/>  <div><strong>Notes:</strong> ${data.notes}</div>
    <br/>  <div><strong>Records File:</strong> ${(
      <img
        loading="lazy"
        src={`${FIRST_PATH}${data.recordsFile}`}
        alt="iamge"
        width={120}
        height={120}
      />
    )}
  </div>
    <br/>
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
}
