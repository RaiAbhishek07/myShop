import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Shirt, VenetianMask } from 'lucide-react';

const services = [
  {
    icon: <Shirt className="w-10 h-10 text-primary" />,
    title: 'Bespoke Suits',
    description: 'Impeccably tailored suits that command respect. Each suit is a masterpiece of fit, fabric, and function, designed to elevate your presence.',
  },
  {
    icon: <VenetianMask className="w-10 h-10 text-primary" />,
    title: 'Safari & Blazers',
    description: 'Masterfully crafted safari jackets and blazers for the modern adventurer. Perfect for those who value style, comfort, and a touch of the exotic.',
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: 'Custom Menswear',
    description: 'From sharp blazers to casual elegance, our custom menswear is designed to fit your lifestyle and crafted with the highest attention to detail.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Precision in Every Stitch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in custom suits, safari jackets, and blazers, offering a tailored experience with an unwavering commitment to quality.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="text-left transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 bg-card">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 rounded-md p-3 flex-shrink-0">
                  {service.icon}
                </div>
                <div className='flex-grow'>
                  <CardTitle className="font-headline text-2xl mb-1">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
