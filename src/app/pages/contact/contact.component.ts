import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService, ContactFormData } from '../../core/services/contact.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';
  testMessage = ''; // Added for test feedback

  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Bangalore, India',
      description: 'Available for remote work and on-site collaboration'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'shainyamin@gmail.com', // ✅ Updated to your working email
      description: 'Feel free to reach out anytime for opportunities'
    },
    {
      icon: 'fas fa-clock',
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'I\'m currently open to new opportunities and freelance projects'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Availability',
      value: 'Full-time & Freelance',
      description: 'Open for both permanent positions and contract work'
    }
  ];

  faqs = [
    {
      question: 'How long do projects typically take?',
      answer: 'Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger applications can take 2-6 months. I always provide detailed estimates upfront.',
      expanded: false
    },
    {
      question: 'Do you work with distributed teams?',
      answer: 'Absolutely! I have extensive experience working with distributed teams and am comfortable with various collaboration tools and methodologies including Agile and Scrum.',
      expanded: false
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Angular, React, TypeScript, and modern frontend technologies. I also have experience with backend integration, testing frameworks, and DevOps practices.',
      expanded: false
    },
    {
      question: 'Do you offer consulting services?',
      answer: 'Yes! I offer consulting services for architecture reviews, code audits, performance optimization, and technical strategy. I\'m happy to discuss your specific needs.',
      expanded: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  // ✅ FIXED - Main form submission using your working EmailJS format
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      const formData: ContactFormData = this.contactForm.value;
      
      console.log('📧 Submitting contact form with data:', formData);
      
      // ✅ Use the exact working EmailJS format
      const response = await emailjs.send("gmd1226", "template_h3rsqnn", {
        from_name: formData.name,
        subject: formData.subject,
        from_email: formData.email,
        reply_to: formData.email,
        email: formData.email,
        message: formData.message
      });

      console.log('✅ Contact form submitted successfully:', response);
      
      this.submitSuccess = true;
      this.submitMessage = '✅ Thank you for your message! I\'ll get back to you within 24 hours.';
      this.contactForm.reset();

    } catch (error: any) {
      console.error('❌ Contact form submission failed:', error);
      this.submitSuccess = false;
      this.submitMessage = `❌ Sorry, there was an error sending your message. Please try again or contact me directly at shainyamin@gmail.com`;
    } finally {
      this.isSubmitting = false;
    }
  }

  // ✅ FIXED - Test function using exact working format
  async testEmailSetup(): Promise<void> {
    this.testMessage = '🧪 Testing email configuration...';
    
    try {
      console.log('🧪 Testing with exact working EmailJS format...');
      
      const response = await emailjs.send("gmd1226", "template_h3rsqnn", {
        from_name: "Angular Test User",
        subject: "Test from Angular Portfolio",
        from_email: "test@example.com",
        reply_to: "test@example.com",
        email: "test@example.com",
        message: "This is a test message from the Angular portfolio application to verify EmailJS is working correctly."
      });
      
      console.log('✅ Test email sent successfully!', response);
      this.testMessage = '✅ Test email sent successfully! Check shainyamin@gmail.com inbox.';
      
    } catch (error: unknown) {
      console.error('❌ Test email failed:', error);
      let errorMessage = 'Unknown error occurred';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (error && typeof error === 'object' && 'text' in error) {
        errorMessage = (error as any).text || String(error);
      }
      
      this.testMessage = `❌ Test failed: ${errorMessage}`;
    }
  }

  // ✅ Direct EmailJS test (backup method)
  async directEmailJSTest(): Promise<void> {
    try {
      console.log('🔥 Direct EmailJS test...');
      
      // Initialize EmailJS if not already done
      emailjs.init('aZS7thxaiiExFd7AP');
      
      const response = await emailjs.send("gmd1226", "template_h3rsqnn", {
        from_name: "Direct Test",
        subject: "Direct EmailJS Test",
        from_email: "direct@test.com",
        reply_to: "direct@test.com",
        email: "direct@test.com",
        message: "This is a direct EmailJS test from the Angular component."
      });
      
      console.log('✅ Direct test successful:', response);
      alert('✅ Direct EmailJS test successful! Check your email.');
      
    } catch (error) {
      console.error('❌ Direct test failed:', error);
      alert(`❌ Direct test failed: ${error}`);
    }
  }

  // Form validation helpers
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field || !field.errors) return '';
    
    if (field.errors['required']) return `${fieldName} is required`;
    if (field.errors['email']) return 'Please enter a valid email address';
    if (field.errors['minlength']) {
      const requiredLength = field.errors['minlength'].requiredLength;
      return `${fieldName} must be at least ${requiredLength} characters`;
    }
    return 'Invalid input';
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}
