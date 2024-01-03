import multer from 'multer';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer();

export default function (req, res) {
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.elasticemail.com",
    auth: {
      user: "duadarsh13@gmail.com",
      pass: "EA9EE3A3C7327A7F3B6AF1DB6E1D4E40D6FC"
    },
    secure: true,
  });

  upload.single('file')(req, res, (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ error: 'Error uploading file' });
    }

    const file = req.file;
    const data = JSON.parse(req.body.data);

    const mailData = {
      from: 'duadarsh13@gmail.com',
      to: 'adarsh.pvt13@gmail.com',
      subject: data.subject,
      text: `Hey there | ${data.skills} | Sent from: ${data.mail}`,
      html: `
        <div>
          <h3>Dear HR,</h3>
          <p>Kindly find the attachment below for ${data.jobtitle} role and please consider me for this role.</p>
          <p>Job Code: ${data.jobcode}</p>
          <!-- Other data -->
        </div>
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer, // Attach the file directly from memory
        },
      ],
    };

    const mailDataClient = {
      from: 'duadarsh13@gmail.com',
      to: `${data.mail}`,
      subject: 'Details have been submitted successfully at scholarnest.com',
      html: `<div><p>Hii</p><p>Your details have been submitted successfully and we will get back to you soon.</p><p>Thanks!<br />Scholarnest Information Technology & Services, Bangalore, India<br /><a href="#">scholarnest@gmail.com</a> | <a href="#">www.scholarnest.com</a></p></div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Error sending email' });
      } else {
        console.log(info);
        transporter.sendMail(mailDataClient, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
        res.send('submitted');
      }
    });
  });
}
