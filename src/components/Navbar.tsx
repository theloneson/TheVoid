import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/hooks/useCart';
import logo from '@/assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="starfield dark:block hidden"></div>
      <nav className="sticky top-0 z-50 nav-cosmic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="The Void" 
                className="h-8 w-auto invert dark:invert-0"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-heading font-medium transition-colors hover:text-void-primary ${
                      isActive ? 'text-void-primary' : 'text-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right side - Theme toggle, Cart, Mobile menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-void-primary/10"
                onClick={() => {/* TODO: Open cart drawer */}}
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-void-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden hover:bg-void-primary/10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border/50">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md font-heading font-medium transition-colors ${
                        isActive
                          ? 'text-void-primary bg-void-primary/10'
                          : 'text-foreground hover:text-void-primary hover:bg-void-primary/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}