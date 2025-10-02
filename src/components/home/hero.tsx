import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white bg-black">
      <Image
        src="/images/hero-background.jpg"
        alt="A well-dressed man in a bespoke suit stands in a tailor's workshop."
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="relative z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline !leading-tight">
          The Art of Bespoke Tailoring
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          We believe a perfect fit is a right, not a luxury. Our craft is built on a simple foundation: quality, precision, and a personal touch.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#booking">Book an Appointment</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
