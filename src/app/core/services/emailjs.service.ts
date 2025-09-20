import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {
  
  private serviceId = 'gmd1226';
  private templateId = 'template_h3rsqnn';
  private userId = 'aZS7thxaiiExFd7AP';

  constructor() {
    // Initialize EmailJS
    emailjs.init(this.userId);
  }

  async sendContactEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  }

  // Email template for contact form
  createContactTemplate(formData: any) {
    return {
      to_name: 'Shainy V Poojari',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  }
}
