'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <TriangleAlert className="h-24 w-24 text-destructive" />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Something Went Wrong
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We apologize for the inconvenience. An unexpected error has occurred. You can try again or return to the homepage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => reset()} size="lg">
                    Try Again
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="/">Return to Homepage</Link>
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
