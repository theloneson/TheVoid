import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-cosmic.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Void - Cosmic Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-cosmic" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
            <span className="block text-white mb-2">Step Into</span>
            <span className="block text-cosmic animate-cosmic-pulse">The Void</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 font-heading font-light max-w-2xl mx-auto">
          Minimal. Cosmic. Made for those who dare.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/shop">
            <Button className="btn-cosmic text-lg px-8 py-4 group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/collections">
            <Button
              variant="outline"
              className="btn-outline-cosmic text-lg px-8 py-4 group border-white/30 text-white hover:bg-white hover:text-black"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Lookbook
            </Button>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-void-primary/20 rounded-full blur-3xl animate-cosmic-float"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-void-secondary/20 rounded-full blur-3xl animate-cosmic-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-cosmic-pulse"></div>
        </div>
      </div>
    </section>
  );
}