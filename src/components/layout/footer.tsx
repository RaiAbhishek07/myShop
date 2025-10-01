import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from '../logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Select Men's Tailor. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
