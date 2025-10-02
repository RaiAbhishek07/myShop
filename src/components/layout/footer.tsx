import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center">
                <span className="font-headline font-bold text-2xl tracking-tight text-primary">
                    Select Men's Tailor
                </span>
            </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Select Men's Tailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
