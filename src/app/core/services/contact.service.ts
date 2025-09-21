import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly EMAIL_SERVICE_ID = environment.emailjs.serviceId;
  private readonly EMAIL_TEMPLATE_ID = environment.emailjs.templateId;
  private readonly EMAIL_PUBLIC_KEY = environment.emailjs.publicKey;

  constructor(private http: HttpClient) {
    this.initializeEmailJS();
  }

  private initializeEmailJS(): void {
    try {
      emailjs.init(this.EMAIL_PUBLIC_KEY);
      console.log('✅ EmailJS initialized successfully');
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
    }
  }

  async sendEmail(formData: ContactFormData): Promise<EmailResponse> {
    try {
      // ✅ FIXED - Proper template parameters
      const templateParams = {
        from_name: formData.name,        // Visitor's name
        from_email: formData.email,      // Visitor's email
        subject: formData.subject,       // Message subject
        message: formData.message,       // Message content
        reply_to: formData.email,        // Reply-to address
        to_email: 'shainyvpoojari@gmail.com',  // ✅ YOUR email (where messages go)
        to_name: 'Shainy V Poojari'     // ✅ Your name
      };

      console.log('📧 Sending email with fixed template params:', templateParams);
      console.log('📧 Service ID:', this.EMAIL_SERVICE_ID);
      console.log('📧 Template ID:', this.EMAIL_TEMPLATE_ID);

      const response = await emailjs.send(
        this.EMAIL_SERVICE_ID,
        this.EMAIL_TEMPLATE_ID,
        templateParams,
        this.EMAIL_PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', response);
      return response;

    } catch (error: unknown) {
      console.error('❌ EmailJS Error:', error);
      throw error;
    }
  }

  sendEmailObservable(formData: ContactFormData): Observable<EmailResponse> {
    return from(this.sendEmail(formData));
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getContactInfo() {
    return {
      name: 'Shainy V Poojari',
      title: 'Senior Frontend Engineer',
      email: 'shainyvpoojari@gmail.com',  // ✅ FIXED typo
      location: 'Bangalore, India',
      responseTime: 'Within 24 hours'
    };
  }
}
