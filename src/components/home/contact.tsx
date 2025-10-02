import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const address = "Sop No.7-1-860/3, Lane Beside Old Jail, Shankar Vedhi, Nala Bazar-500003";
  const encodedAddress = encodeURIComponent(address);
  const ownerName = "Rai Venkatesh";
  const phone = "+91 8688583959";
  const email = "contact@selectmenstailor.com";

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Get in Touch
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Have a question or a special request? We're here to help. Fill out the form below, or visit us at our shop.
            </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold font-headline">Our Address</h3>
                <p className="text-muted-foreground">{address}</p>
                <p className="text-sm text-muted-foreground">Owner: {ownerName}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold font-headline">Phone</h3>
                <p className="text-muted-foreground">{phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold font-headline">Email</h3>
                <p className="text-muted-foreground">{email}</p>
              </div>
            </div>
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Let us know how we can assist you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="johndoe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden border">
          <iframe
            src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${address}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
