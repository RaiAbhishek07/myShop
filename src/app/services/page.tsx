import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Scissors, Shirt, VenetianMask } from "lucide-react";

const services = [
    {
      icon: <Shirt className="w-12 h-12 text-primary" />,
      title: 'Bespoke Suits',
      description: 'Impeccably tailored suits that command respect. Each suit is a masterpiece of fit, fabric, and function, designed to elevate your presence.',
      features: ["Personal Consultation", "Precision Measurements", "Premium Fabric Selection", "Multiple Fittings"]
    },
    {
      icon: <VenetianMask className="w-12 h-12 text-primary" />,
      title: 'Safari & Blazers',
      description: 'Masterfully crafted safari jackets and blazers for the modern adventurer. Perfect for those who value style, comfort, and a touch of the exotic.',
      features: ["Custom Design", "Durable & Luxury Materials", "Functional Pockets", "Perfect for Travel"]
    },
    {
      icon: <Scissors className="w-12 h-12 text-primary" />,
      title: 'Custom Menswear',
      description: 'From sharp trousers to casual elegance, our custom menswear is designed to fit your lifestyle and crafted with the highest attention to detail.',
      features.
[('Custom Shirts & Trousers'), ('Waistcoats & Overcoats'), ('Fabric & Style Curation'), ('Accessory Pairing')]
    },
  ];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <ServicesHero />
                <ServiceDetails />
                <Craftsmanship />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}

function ServicesHero() {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center text-white">
            <Image
                src="https://images.unsplash.com/photo-1523398356393-8b5551071294?q=80&w=2070&auto=format&fit=crop"
                alt="A tailor meticulously working on a suit"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-headline !leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
                    Crafted to Perfection: Our Bespoke Services
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-primary-foreground/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    From timeless formals to traditional masterpieces, we tailor your story.
                </p>
            </div>
        </section>
    );
}

function ServiceDetails() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="flex flex-col bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <CardHeader className="p-6 items-center text-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <ul className="space-y-3 text-muted-foreground">
                                    {service.features.map(feature => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0 mt-auto">
                                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300" asChild>
                                    <Link href="#contact">Inquire Now</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Craftsmanship() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-4">
                            The Art of Our Craftsmanship
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed mb-6">
                            Our tailoring process is a blend of time-honored techniques and modern precision. We believe in a collaborative journey, from the initial measurement to the final fitting, ensuring a garment that is truly yours.
                        </p>
                        {/* Placeholder for process timeline */}
                        <div className="space-y-4">
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                <p className="font-medium">Measurement & Consultation</p>
                           </div>
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                <p className="font-medium">Fabric Selection & Design</p>
                           </div>
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                <p className="font-medium">First & Second Fittings</p>
                           </div>
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                <p className="font-medium">Final Touches & Delivery</p>
                           </div>
                        </div>
                    </div>
                    <div>
                        <Image 
                            src="https://images.unsplash.com/photo-1623578059518-bbdb071eab81?q-80&w=1887&auto=format&fit=crop"
                            alt="Tailor's hands sewing a garment"
                            width={600}
                            height={700}
                            className="rounded-lg object-cover shadow-xl"
                            data-ai-hint="tailor sewing"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
                    Trusted by Gentlemen
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mb-12">
                    Our clients' satisfaction is the true measure of our success.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                     {/* Placeholder for testimonials */}
                    <Card>
                        <CardContent className="p-6">
                            <p className="mb-4">"The fit of my wedding suit was absolutely perfect. The compliments were endless. Thank you!"</p>
                            <p className="font-bold font-headline">- James P.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <p className="mb-4">"Incredible attention to detail. I've never owned a blazer that felt so comfortable and looked so sharp."</p>
                            <p className="font-bold font-headline">- Michael B.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <p className="mb-4">"The team guided me through fabric selection and design with such expertise. A truly bespoke experience."</p>
                            <p className="font-bold font-headline">- David L.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}