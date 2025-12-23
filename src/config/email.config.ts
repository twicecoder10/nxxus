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
      subject: "We've received your request",
      getHtml: (userName: string) => `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>We've received your request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 8px;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for contacting NXXIM.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              We have received your request. A member of our team will follow up to schedule a meeting.
            </p>
            
            <p style="font-size: 16px; margin-top: 30px;">
              Best regards,<br>
              <strong>The NXXIM Team</strong>
            </p>
          </div>
        </body>
        </html>
      `,
      getText: (userName: string) => `
Thank you for contacting NXXIM.

We have received your request. A member of our team will follow up to schedule a meeting.

Best regards,

The NXXIM Team
      `
    },

    // Notification email sent to admin
    adminNotification: {
      subject: 'New Meeting Request - NXXIM',
      getHtml: (formData: {
        fullName: string;
        workEmail: string;
        organization: string;
        title?: string;
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
              <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.title ? formData.title + ' ' : ''}${formData.fullName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${formData.workEmail}" style="color: #94B3D8; text-decoration: none;">${formData.workEmail}</a></p>
              <p style="margin: 10px 0;"><strong>Organization:</strong> ${formData.organization}</p>
              ${formData.title ? `<p style="margin: 10px 0;"><strong>Title:</strong> ${formData.title}</p>` : ''}
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
        title?: string;
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
Name: ${formData.title ? formData.title + ' ' : ''}${formData.fullName}
Email: ${formData.workEmail}
Organization: ${formData.organization}
${formData.title ? `Title: ${formData.title}\n` : ''}Role: ${formData.role || 'Not specified'}
Primary Area of Interest: ${interests}

${formData.message ? `Message:\n${formData.message}\n` : ''}

Action Required: Please follow up with ${formData.fullName} to schedule their meeting.
      `;
      }
    }
  }
};

