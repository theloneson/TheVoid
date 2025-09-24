import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: 'All Products', href: '/shop' },
      { label: 'The Fifth Eclipse', href: '/collection/the-fifth-eclipse' },
      { label: 'Oblivion Core', href: '/collection/oblivion-core' },
      { label: 'Void Runner', href: '/collection/void-runner' },
    ],
    Support: [
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/thevoid', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/thevoid', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/thevoid', label: 'YouTube' },
    { icon: Mail, href: 'mailto:hello@thevoid.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-display font-bold text-cosmic">
                VOID
              </div>
            </Link>
            <p className="text-muted font-body mb-4 max-w-xs">
              Minimal. Cosmic. Made for those who dare to step into the unknown.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-void-primary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted hover:text-void-primary transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted font-body text-sm">
              © {currentYear} The Void. All rights reserved.
            </p>
            <p className="text-muted font-body text-sm">
              Built for the outlaws of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}