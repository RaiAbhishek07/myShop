import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serviceCategories = [
    {
        title: "Formals",
        description: "Impeccably tailored for the modern professional. Our formal wear combines timeless elegance with contemporary style.",
        className: "bg-card",
        items: [
            {
                title: "Formal Shirt",
                description: "Tailored for work & comfort.",
                image: "/images/formal-shirt.png",
                imageHint: "formal shirt"
            },
            {
                title: "Formal Trousers",
                description: "Precision-cut for a sharp silhouette.",
                image: "/images/paint.png",
                imageHint: "formal pants"
            },
            {
                title: "Business Suit",
                description: "Command respect with our 2-piece & 3-piece suits.",
                image: "/images/2pieceSuite.png",
                imageHint: "business suit"
            },
            {
                title: "Blazer / Coat",
                description: "Versatile and stylish for any occasion.",
                image: "/images/blazer.png",
                imageHint: "blazer"
            },
            {
                title: "Waistcoat",
                description: "Add a layer of sophistication.",
                image: "/images/waistcoat.png",
                imageHint: "waistcoat"
            },
            {
                title: "Office Lungi with Shirt",
                description: "A unique blend of tradition and professionalism.",
                image: "/images/lungi.png",
                imageHint: "man wearing lungi"
            },
        ]
    },
    {
        title: "Traditional Wear",
        description: "Embrace your heritage with our exquisitely crafted traditional attire.",
        className: "bg-secondary",
        items: [
            {
                title: "Veshti / Dhoti",
                description: "Classic Mundu / Panche for cultural events.",
                image: "/images/Wedding Veshti.png",
                imageHint: "man wearing dhoti"
            },
            {
                title: "Silk Veshti",
                description: "Luxurious Kasavu & Zari borders.",
                image: "/images/Silk Veshti.png",
                imageHint: "silk dhoti"
            },
            {
                title: "Kurta",
                description: "Short and long kurtas for comfort and style.",
                image: "/images/Kurta(long).png",
                imageHint: "kurta"
            },
            {
                title: "Kurta-Pajama Set",
                description: "The complete traditional ensemble.",
                image: "/images/Kurta-Pajama.png",
                imageHint: "kurta pajama"
            },
            {
                title: "Angavastram",
                description: "Elegant shawls for the shoulder.",
                image: "https://picsum.photos/seed/shawl/600/800",
                imageHint: "shawl"
            },
            {
                title: "Silk Shirt",
                description: "Perfect for festivals and celebrations.",
                image: "/images/silk-shirt.png",
                imageHint: "silk shirt"
            }
        ]
    },
    {
        title: "Occasional / Festive Wear",
        description: "Make a statement at your next special event with our stunning collection of festive wear.",
        className: "bg-card",
        items: [
            {
                title: "Wedding Veshti Set",
                description: "Zari & silk shirt for the groom.",
                image: "/images/Wedding Veshti.png",
                imageHint: "wedding groom"
            },
            {
                title: "Sherwani",
                description: "Elegant South Indian style sherwanis.",
                image: "/images/Sherwani.png",
                imageHint: "sherwani"
            },
            {
                title: "Jodhpuri Suit",
                description: "A regal choice for formal occasions.",
                image: "/images/Jodhpuri Suit.png",
                imageHint: "jodhpuri suit"
            },
            {
                title: "Indo-Western Suit",
                description: "A fusion of modern and traditional styles.",
                image: "/images/Indo-Western Suit.png",
                imageHint: "indo-western suit"
            },
            {
                title: "Pathani Suit",
                description: "Stylish and unique festive attire.",
                image: "/images/Pathani Suit.png",
                imageHint: "designer kurta"
            },
            {
                title: "Reception Blazer Suit",
                description: "Look sharp and sophisticated for any party.",
                image: "/images/Reception Blazer Suit.png",
                imageHint: "reception suit"
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <ServicesHero />
                {serviceCategories.map((category) => (
                    <ServiceCategorySection key={category.title} {...category} />
                ))}
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

function ServicesHero() {
    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter font-headline">
                    Our Services – Custom Tailoring
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl text-primary-foreground/80">
                    We specialize in perfectly stitched outfits for every occasion.
                </p>
            </div>
        </section>
    );
}

function ServiceCategorySection({ title, description, className, items }: (typeof serviceCategories)[0]) {
    return (
        <section className={`w-full py-16 md:py-24 lg:py-32 ${className}`}>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        {title}
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        {description}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <Card key={item.title} className="flex flex-col bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                            <CardHeader className="p-0">
                                <div className="relative h-80 w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={item.imageHint}
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="font-headline text-2xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground mt-2 flex-grow">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


function CTA() {
    return (
        <section id="booking-cta" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                        Get Your Perfect Fit Today!
                    </h2>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button type="submit" size="lg" className="w-full" asChild>
                        <Link href="/#contact">Book Your Stitching</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
