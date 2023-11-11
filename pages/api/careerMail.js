import multer from 'multer';

// const upload = multer({ dest: 'uploads/' });
export const config = {
  api: {
    bodyParser: false
  }
}
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const fs = require('fs');
  
    upload.single('file')(req, res, (err) => {
      if (err) {
        // Handle multer error
        console.error('Error uploading file:', err);
        return res.status(500).json({ error: 'Error uploading file' });
      }
  
      // Access the uploaded file and string data
      const file = req.file;
      const data = JSON.parse(req.body.data);
   
      // Handle the file and data as per your server logic
      const filePath =file.path;
      const fileContent = fs.readFileSync(filePath);
      const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.elasticemail.com",
          auth: {
            user: "duadarsh13@gmail.com",
            pass: "EA9EE3A3C7327A7F3B6AF1DB6E1D4E40D6FC"
          },
          secure: true,
        })
        const htmlContent=`<div><h3>Dear HR,</h3>
        <p>Kindly find my attachment below for ${data.jobtitle} role and please consider me for this role. 
         </p>
  </div>
    <p>Job Code: ${data.jobcode} <br />
    Organization:${data.organization} <br />
    Job Title: ${data.jobtitle} <br />
    Name : ${data.title}  ${data.name} <br />
    Mail id: ${data.mail} <br />
    Mobile No. : ${data.mobile} <br />
    Skills : ${data.skills} <br />
    Experience : ${data.exp} months <br />
    Notice period : ${data.nperiod} days <br />
    Current ctc : ${data.currctc} <br />
    Expected ctc : ${data.expctc} <br />
    Location : ${data.location} <br />
    Ready to Relocate ?  : ${data.Reloc} 
    </p>
    
   <p> Thanks & Regards ! <br />
   Scholarnest Information Technology & Services , Bangalore, India <br />
   <a href="#"> scholarnest@gmail.com </a> | <a href="#"> www.scholarnest.com </a>
   </p>
   <img   src="http://localhost:3000/assets/scholarnest-logo.jpg"  alt="Logo" /> 
    `
       
const htmlContentclient =`<div><p>Hii</p>
<p> Your details has been submitted successfully and we will get back to you soon. </p>


<p> Thanks! <br />
Scholarnest Information Technology & Services , Bangalore, India <br />
<a href="#"> scholarnest@gmail.com </a> | <a href="#"> www.scholarnest.com </a>
</p>
<img   src="http://localhost:3000/assets/scholarnest-logo.jpg"  alt="Logo" /> 
</div>

`
        const mailData = {
          from:'duadarsh13@gmail.com',
          to: 'scholarnestmarketing@gmail.com',
          subject: data.subject,
          text: "Hey there " + " | " + data.skills + " | Sent from: " + data.mail,
            attachments: [
              {
                filename: "resume.pdf",
                content: fileContent,
              },
             ],
          html: htmlContent
        }
        const mailDataClient={
          from:'duadarsh13@gmail.com',
          to: `${data.mail}`,
          subject: 'Details has been submitted succesfully at scholarnest.com',
      
      
          html:htmlContentclient
         }
        transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })
        transporter.sendMail(mailDataClient, function (err, info) {
          if(err)
            console.log(err)
          else
          {
           console.log(info)
          }
            
        })
        console.log("data are",data)
      res.send("submitted");
      });
    
  
  
  
  }