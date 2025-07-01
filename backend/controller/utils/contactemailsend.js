const nodemailer = require("nodemailer");

const sendWorkEmail = async ({
  firstName,
  lastName,
  email,
  moblie, 
  description,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "agarissitsolution@gmail.com",
      pass: "obmp ltna ijmw jfop", // App password
    },
  });

  const mailOptions = {
    from: '"Agariss IT Solution" <agarissitsolution@gmail.com>',
    to: "agarissitsolution@gmail.com",
    subject: "📬 New Contact Enquiry",
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #f4f6f8; padding: 30px;">
        <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 0 15px rgba(0,0,0,0.07); overflow: hidden;">
          <div style="background-color: #1a73e8; padding: 20px; text-align: center; color: #fff;">
            <h2 style="margin: 0;">Agariss IT Solution</h2>
            <p style="margin: 5px 0 0;">📞 New Contact Enquiry</p>
          </div>

          <div style="padding: 30px; color: #333;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              You have received a new inquiry. Here are the details:
            </p>

            <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
              <tr style="background-color: #f1f1f1;">
                <td style="padding: 12px;"><strong>First Name</strong></td>
                <td style="padding: 12px;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9;"><strong>Last Name</strong></td>
                <td style="padding: 12px;">${lastName}</td>
              </tr>
              <tr style="background-color: #f1f1f1;">
                <td style="padding: 12px;"><strong>Email</strong></td>
                <td style="padding: 12px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background-color: #f9f9f9;"><strong>Mobile</strong></td>
                <td style="padding: 12px;">${moblie}</td>
              </tr>
              <tr style="background-color: #f1f1f1;">
                <td style="padding: 12px;"><strong>Description</strong></td>
                <td style="padding: 12px; white-space: pre-line;">${description}</td>
              </tr>
            </table>

            <p style="font-size: 13px; color: #888; margin-top: 30px;">
              This message was submitted through your website contact form.
            </p>
          </div>

          <div style="background-color: #f8f8f8; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            &copy; ${new Date().getFullYear()} Agariss IT Solution. All rights reserved.
          </div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendWorkEmail;
