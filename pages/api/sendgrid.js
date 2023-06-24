import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  // try {
  //   await sendgrid.send({
  //     to: "youremail@gmail.com", // Your email where you'll receive emails
  //     from: "anotheremail@gmail.com", // your website email address here
  //     subject: `[Lead from website] : ${req.body.subject}`,
  //     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  //     <html lang="en">
  //     <head>
  //       <meta charset="utf-8">

  //       <title>The HTML5 Herald</title>
  //       <meta name="description" content="The HTML5 Herald">
  //       <meta name="author" content="SitePoint">
  //     <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

  //       <link rel="stylesheet" href="css/styles.css?v=1.0">

  //     </head>

  //     <body>
  //       <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
  //             </div>
  //             <div class="container" style="margin-left: 20px;margin-right: 20px;">
  //             <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
  //             <div style="font-size: 16px;">
  //             <p>Message:</p>
  //             <p>${req.body.message}</p>
  //             <br>
  //             </div>
  //             <img src="https://manuarora.in/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
  //             <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Manu Arora<br>Software Developer<br>+91 9587738861</p>
  //             <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
  //               <a href="https://manuarora.in/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
  //               <a href="https://manuarora.in/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
  //               <a href="https://github.com/manuarora700/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
  //               <a href="https://instagram.com/maninthere/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
  //               <a href="https://linkedin.com/in/manuarora28/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
  //               <a href="https://twitter.com/mannupaaji/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>

  //             </div>
  //             </div>
  //     </body>
  //     </html>`,
  //   });
  // } catch (error) {
  //   // console.log(error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // }
  
  let nodemailer = require('nodemailer')
  const data = req.body;
  console.log("data is",data)
  const transporter = nodemailer.createTransport({
       port: 465,
       host: "smtp.elasticemail.com",
       auth: {
         user: "duadarsh13@gmail.com",
         pass: "EA9EE3A3C7327A7F3B6AF1DB6E1D4E40D6FC"
       },
       secure: true,
     })
     const htmlContent= `<div><p>Hii</p>
     <p>There is an inquiry from ${data.fullname} (${data.email}) through <a href="#"> www.scholarnest.com </a> with below details.
 
      </p>
      <p>
       Company Name: ${data.companyname} <br />
       Name: ${data.fullname} <br />
       Email id: ${data.email} <br />
       Phone : ${data.phone}  <br />
       Message: ${data.message} <br />
      </p>
   <p> Thanks! <br />
   Scholarnest Information Technology & Services , Bangalore, India <br />
   <a href="#"> scholarnest@gmail.com </a> | <a href="#"> www.scholarnest.com </a>
   </p>
   <img   src="http://localhost:3000/assets/scholarnest-logo.jpg"  alt="Logo" /> 
</div>

 `

const htmlContentclient =`<div><p>Hii</p>
     <p> Your query has been received and we will get back to you soon. </p>
   
  
   <p> Thanks! <br />
   Scholarnest Information Technology & Services , Bangalore, India <br />
   <a href="#"> scholarnest@gmail.com </a> | <a href="#"> www.scholarnest.com </a>
   </p>
   <img   src="http://localhost:3000/assets/scholarnest-logo.jpg"  alt="Logo" /> 
</div>

 `

   

    //  console.log(image)
     const mailData = {
       from:'duadarsh13@gmail.com',
       to: 'adarsh.pvt13@gmail.com',
       subject: 'Inquiry from Scholarnest.com',
   
   
       html:htmlContent
     }
     const mailDataClient={
      from:'duadarsh13@gmail.com',
      to: `${data.email}`,
      subject: 'Response to your query at scholarnest.com',
  
  
      html:htmlContentclient
     }
     transporter.sendMail(mailData, function (err, info) {
       if(err)
         console.log(err)
       else
       {
       console.log(info)
       }
         
     })
  transporter.sendMail(mailDataClient, function (err, info) {
      if(err)
        console.log(err)
      else
      {
       console.log(info)
      }     
    }) 
    
    

  return res.status(200).json({ error: "" });
}

export default sendEmail;
