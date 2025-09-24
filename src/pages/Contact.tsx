import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
            Get in <span className="text-cosmic">Touch</span>
          </h1>
          <p className="text-xl text-muted font-heading max-w-3xl mx-auto">
            Have questions about our products, need sizing help, or want to join our cosmic community? 
            We're here to help you step into The Void.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface/50 rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-background border-border/50 focus:border-void-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border/50 focus:border-void-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-heading font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-background border-border/50 focus:border-void-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-heading font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="bg-background border-border/50 focus:border-void-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-cosmic group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Other ways to reach us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-void-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-void-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted font-body">hello@thevoid.com</p>
                    <p className="text-sm text-muted font-body">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-void-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-void-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted font-body">+1 (555) VOID-123</p>
                    <p className="text-sm text-muted font-body">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-void-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-void-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted font-body">
                      123 Cosmic Avenue<br />
                      Los Angeles, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-gradient-cosmic rounded-xl p-6 text-white">
              <h3 className="text-xl font-display font-bold mb-4">
                Quick Questions?
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Shipping:</strong> Free worldwide shipping on orders over $100
                </div>
                <div>
                  <strong>Returns:</strong> 30-day return policy, no questions asked
                </div>
                <div>
                  <strong>Sizing:</strong> Check our size guide for the perfect fit
                </div>
                <div>
                  <strong>Care:</strong> Machine wash cold, hang dry recommended
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}