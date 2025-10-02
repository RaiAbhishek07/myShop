'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Gallery } from "@/components/home/gallery";
import { Contact } from "@/components/home/contact";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleBookAppointment = () => {
    const whatsappNumber = "918688583959";
    const message = "Hello! I'd like to book an appointment.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Booking onBookAppointment={handleBookAppointment} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-1 lg:gap-16">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              A Legacy of Craftsmanship
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              For over three decades, Select Men's Tailor has been dedicated to the art of bespoke tailoring. Our master craftsmen combine traditional techniques with modern sensibilities to create suits that are not just garments, but extensions of your personality.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed">
              We believe that a well-made suit is an investment. That's why we source only the finest fabrics from around the world and dedicate countless hours to ensure every stitch is perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function Booking({ onBookAppointment }: { onBookAppointment: () => void }) {
    return (
        <section id="booking" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                        Schedule Your Personal Consultation
                    </h2>
                    <p className="mx-auto max-w-[600px] text-secondary-foreground/80 md:text-xl/relaxed">
                        Experience the art of bespoke tailoring firsthand. Book a private appointment with our master tailors to begin your journey towards the perfect suit.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button type="button" size="lg" className="w-full" variant="default" onClick={onBookAppointment}>
                        Book an Appointment
                    </Button>
                </div>
            </div>
        </section>
    );
}
