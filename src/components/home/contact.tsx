import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Get in Touch
            </h2>
            <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed">
              Have a question or a special request? We're here to help. Fill out the form, and one of our specialists will get back to you shortly.
            </p>
            <div className="space-y-2 pt-4">
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@selectmenstailor.com</p>
                <h3 className="font-semibold pt-2">Phone</h3>
                <p className="text-muted-foreground">+44 20 7123 4567</p>
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
