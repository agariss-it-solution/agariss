const nodemailer = require("nodemailer");

const sendJobApplicationEmail = async ({
  fullName,
  email,
  contact_number,
  position,
  experience,
  resumeUrl,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "agarissitsolution@gmail.com",
      pass: "obmp ltna ijmw jfop", // App password
    },
  });

  const mailOptions = {
    from: '"Agariss Careers" <agarissitsolution@gmail.com>',
    to: "agarissitsolution@gmail.com",
    subject: `📩 New Application for "${position}"`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #eef2f7; padding: 30px;">
        <div style="max-width: 650px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <div style="background-color: #1a73e8; color: white; padding: 25px; text-align: center;">
            <h2 style="margin: 0;">🚀 New Job Application</h2>
            <p style="margin: 5px 0 0;">Position: <strong>${position}</strong></p>
          </div>
          
          <!-- Details -->
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #444;">You've received a new job application. Below are the applicant's details:</p>
            
            <table style="width: 100%; margin-top: 20px; font-size: 15px; border-collapse: collapse;">
              <tr style="background-color: #f4f6fa;">
                <td style="padding: 12px; font-weight: bold; width: 40%;">👤 Full Name</td>
                <td style="padding: 12px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; background-color: #f9fafc;">📧 Email</td>
                <td style="padding: 12px;">${email}</td>
              </tr>
              <tr style="background-color: #f4f6fa;">
                <td style="padding: 12px; font-weight: bold;">📱 Contact Number</td>
                <td style="padding: 12px;">${contact_number}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; background-color: #f9fafc;">💼 Position</td>
                <td style="padding: 12px;">${position}</td>
              </tr>
              <tr style="background-color: #f4f6fa;">
                <td style="padding: 12px; font-weight: bold;">📅 Experience</td>
                <td style="padding: 12px;">${experience}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; background-color: #f9fafc;">📎 Resume</td>
                <td style="padding: 12px;">
                  <a href="${resumeUrl}" target="_blank" style="display: inline-block; padding: 10px 18px; background-color: #1a73e8; color: white; text-decoration: none; border-radius: 6px;">
                    🔗 View Resume
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin-top: 30px; font-size: 14px; color: #666;">
              📥 This application was submitted via the <strong>Agariss Careers</strong> portal.
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f3f4; padding: 15px; text-align: center; font-size: 13px; color: #999;">
            &copy; ${new Date().getFullYear()} Agariss IT Solution. All rights reserved.
          </div>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendJobApplicationEmail;
