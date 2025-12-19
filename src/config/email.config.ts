/**
 * Email Configuration
 * 
 * Edit this file to update SMTP settings, email addresses, and email templates
 */

export const emailConfig = {
  // SMTP Configuration
  smtp: {
    host: 'smtp.stackmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'support@ivoirebagagexpress.com',
      password: 'Lk254def0'
    }
  },

  // Email Addresses
  from: {
    name: 'NXXIM',
    email: 'support@ivoirebagagexpress.com'
  },
  adminEmail: 'ag@geneva.pe',

  // Email Templates
  templates: {
    // Thank you email sent to user
    thankYou: {
      subject: 'Thank You for Contacting NXXIM!',
      getHtml: (userName: string) => `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Requesting a Demo</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px;">
            <h1 style="color: #000000; font-size: 28px; margin-bottom: 20px;">Thank You, ${userName}!</h1>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              We've received your request for a personalized demo of NXXIM's AI-native diagnostic platform.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Our team will review your request and get back to you within 24 hours to schedule a convenient time for your demo.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h2 style="color: #94B3D8; font-size: 20px; margin-top: 0;">What to Expect:</h2>
              <ul style="margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 10px;">A personalized walkthrough of our unified diagnostic workspace</li>
                <li style="margin-bottom: 10px;">See how NXXIM integrates with your existing systems</li>
                <li style="margin-bottom: 10px;">Learn about AI-powered workflows and collaboration features</li>
                <li style="margin-bottom: 10px;">Discuss your specific use case and requirements</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              If you have any immediate questions, feel free to reach out to us at 
              <a href="mailto:info@nxxim.com" style="color: #94B3D8; text-decoration: none;">info@nxxim.com</a>.
            </p>
            
            <p style="font-size: 16px; margin-top: 30px;">
              Best regards,<br>
              <strong>The NXXIM Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6B7280; font-size: 12px;">
            <p>NXXIM - Unifying Every Diagnostic Stream</p>
            <p>149 Madison Ave 5th Floor, New York, NY 10016, USA</p>
          </div>
        </body>
        </html>
      `,
      getText: (userName: string) => `
Thank You, ${userName}!

We've received your request for a personalized demo of NXXIM's AI-native diagnostic platform.

Our team will review your request and get back to you within 24 hours to schedule a convenient time for your demo.

What to Expect:
- A personalized walkthrough of our unified diagnostic workspace
- See how NXXIM integrates with your existing systems
- Learn about AI-powered workflows and collaboration features
- Discuss your specific use case and requirements

If you have any immediate questions, feel free to reach out to us at info@nxxim.com.

Best regards,
The NXXIM Team

NXXIM - Unifying Every Diagnostic Stream
149 Madison Ave 5th Floor, New York, NY 10016, USA
      `
    },

    // Notification email sent to admin
    adminNotification: {
      subject: 'New Meeting Request - NXXIM',
      getHtml: (formData: {
        fullName: string;
        workEmail: string;
        organization: string;
        role: string;
        primaryAreaOfInterest: string | string[];
        message: string;
      }) => {
        const interests = Array.isArray(formData.primaryAreaOfInterest) 
          ? formData.primaryAreaOfInterest.join(', ') 
          : formData.primaryAreaOfInterest || 'Not specified';
        
        return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Demo Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px;">
            <h1 style="color: #000000; font-size: 28px; margin-bottom: 20px;">New Meeting Request Received</h1>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #94B3D8; font-size: 20px; margin-top: 0;">Contact Information:</h2>
              <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.fullName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${formData.workEmail}" style="color: #94B3D8; text-decoration: none;">${formData.workEmail}</a></p>
              <p style="margin: 10px 0;"><strong>Organization:</strong> ${formData.organization}</p>
              <p style="margin: 10px 0;"><strong>Role:</strong> ${formData.role || 'Not specified'}</p>
              <p style="margin: 10px 0;"><strong>Primary Area of Interest:</strong> ${interests}</p>
            </div>
            
            ${formData.message ? `
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #94B3D8; font-size: 20px; margin-top: 0;">Message:</h2>
              <p style="white-space: pre-wrap; margin: 0;">${formData.message}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="font-size: 14px; color: #6B7280;">
                <strong>Action Required:</strong> Please follow up with ${formData.fullName} to schedule their meeting.
              </p>
              <p style="margin-top: 15px;">
                <a href="mailto:${formData.workEmail}?subject=Re: Meeting Request - NXXIM" 
                   style="background-color: #94B3D8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Reply to ${formData.fullName}
                </a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `;
      },
      getText: (formData: {
        fullName: string;
        workEmail: string;
        organization: string;
        role: string;
        primaryAreaOfInterest: string | string[];
        message: string;
      }) => {
        const interests = Array.isArray(formData.primaryAreaOfInterest) 
          ? formData.primaryAreaOfInterest.join(', ') 
          : formData.primaryAreaOfInterest || 'Not specified';
        
        return `
New Meeting Request Received

Contact Information:
Name: ${formData.fullName}
Email: ${formData.workEmail}
Organization: ${formData.organization}
Role: ${formData.role || 'Not specified'}
Primary Area of Interest: ${interests}

${formData.message ? `Message:\n${formData.message}\n` : ''}

Action Required: Please follow up with ${formData.fullName} to schedule their meeting.
      `;
      }
    }
  }
};

