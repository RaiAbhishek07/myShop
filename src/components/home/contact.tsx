import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const address = "Sop No.7-1-860/3, Lane Beside Old Jail, Shankar Vedhi, Nala Bazar-500003";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Get in Touch
            </h2>
            <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed">
              Have a question or a special request? We're here to help. Fill out the form, or visit us at our shop.
            </p>
            <div className="space-y-4 pt-4 text-muted-foreground">
                <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">Our Address</h3>
                    <p>{address}</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold text-foreground pt-2">Owner</h3>
                    <p>Rai Venkatesh</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold text-foreground pt-2">Phone</h3>
                    <p>+91 8688583959</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-semibold text-foreground pt-2">Email</h3>
                    <p>contact@selectmenstailor.com</p>
                </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden border">
              <iframe
                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Us</CardTitle>
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
        </div>
      </div>
    </section>
  );
}
