/**
 * Email Service
 * 
 * This service handles sending emails via SMTP
 * 
 * NOTE: In a production environment, this should be called from a backend API endpoint
 * for security reasons (to protect SMTP credentials). This is a client-side implementation
 * that should be moved to a backend server.
 */

import { emailConfig } from '../config/email.config';

export interface EmailFormData {
  fullName: string;
  workEmail: string;
  organization: string;
  role: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Send thank you email to user
 */
export async function sendThankYouEmail(userEmail: string, userName: string): Promise<EmailResponse> {
  try {
    // Use environment variable for API URL or default to backend server on port 3001
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/send-email';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'thank-you',
        to: userEmail,
        userName: userName,
        subject: emailConfig.templates.thankYou.subject,
        html: emailConfig.templates.thankYou.getHtml(userName),
        text: emailConfig.templates.thankYou.getText(userName),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Thank you email sent successfully',
    };
  } catch (error: any) {
    console.error('Error sending thank you email:', error);
    
    // Check if it's a network error (backend not running)
    if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
      return {
        success: false,
        message: 'Backend server is not running. Please start the email API server.',
      };
    }
    
    return {
      success: false,
      message: error.message || 'Failed to send thank you email',
    };
  }
}

/**
 * Send notification email to admin
 */
export async function sendAdminNotification(formData: EmailFormData): Promise<EmailResponse> {
  try {
    // Use environment variable for API URL or default to backend server on port 3001
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/send-email';
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'admin-notification',
        to: emailConfig.adminEmail,
        formData: formData,
        subject: emailConfig.templates.adminNotification.subject,
        html: emailConfig.templates.adminNotification.getHtml(formData),
        text: emailConfig.templates.adminNotification.getText(formData),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Admin notification sent successfully',
    };
  } catch (error: any) {
    console.error('Error sending admin notification:', error);
    
    // Check if it's a network error (backend not running)
    if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
      return {
        success: false,
        message: 'Backend server is not running. Please start the email API server.',
      };
    }
    
    return {
      success: false,
      message: error.message || 'Failed to send admin notification',
    };
  }
}

/**
 * Send both emails (thank you to user and notification to admin)
 */
export async function sendDemoRequestEmails(formData: EmailFormData): Promise<EmailResponse> {
  try {
    // Send thank you email to user
    const thankYouResult = await sendThankYouEmail(formData.workEmail, formData.fullName);
    
    // Send notification to admin
    const adminResult = await sendAdminNotification(formData);

    if (thankYouResult.success && adminResult.success) {
      return {
        success: true,
        message: 'Emails sent successfully',
      };
    } else {
      return {
        success: false,
        message: 'Some emails failed to send',
      };
    }
  } catch (error) {
    console.error('Error sending demo request emails:', error);
    return {
      success: false,
      message: 'Failed to send emails',
    };
  }
}

