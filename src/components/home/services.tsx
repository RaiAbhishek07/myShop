import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Shirt, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Shirt className="w-10 h-10 text-primary" />,
    title: 'Custom Suits',
    description: 'Bespoke suits tailored to your exact measurements and style preferences, crafted from the world\'s finest fabrics.',
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: 'Alterations',
    description: 'Perfecting the fit of your existing wardrobe, from simple hemming to complex resizing for any garment.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Repairs & Restoration',
    description: 'Breathe new life into your cherished garments with our expert repair and restoration services.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Precision, passion, and perfection in every stitch. We offer a range of services to meet all your tailoring needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-accent rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
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
