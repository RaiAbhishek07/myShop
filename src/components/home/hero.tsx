import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white">
      <Image
        src="/images/hero-background.jpg"
        alt="A well-dressed man in a bespoke suit stands in a tailor's workshop."
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline !leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          The Art of Bespoke Tailoring
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
          We believe a perfect fit is a right, not a luxury. Our craft is built on a simple foundation: quality, precision, and a personal touch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#booking">Book an Appointment</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white hover:bg-white/10 hover:text-white border-white/50">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}