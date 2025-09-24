import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter signup
    setIsSubmitted(true);
    setEmail('');
    
    toast({
      title: "Welcome to The Void",
      description: "You've successfully joined our cosmic community.",
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Stay in The Void
          </h2>
          <p className="text-lg text-muted font-heading">
            Be the first to know about new drops, exclusive releases, and cosmic events. 
            Join the community of outlaws who dare to be different.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email to join the void"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border/50 focus:border-void-primary"
            />
            <Button type="submit" className="btn-cosmic group">
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Join The Void
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-void-primary">
            <CheckCircle className="h-6 w-6" />
            <span className="font-heading font-semibold">Welcome to The Void!</span>
          </div>
        )}

        <p className="text-xs text-muted mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}