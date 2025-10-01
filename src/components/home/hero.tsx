import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-headline">
          The Art of Bespoke Tailoring
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          We believe a perfect fit is a right, not a luxury. Our craft is built on a simple foundation: quality, precision, and a personal touch.
        </p>
        <Button size="lg" asChild>
          <Link href="#booking">Discover Your Style</Link>
        </Button>
      </div>
    </section>
  );
}
