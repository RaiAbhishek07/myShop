'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const address = "SELECT MEN'S TAILOR, Sop No, 7-1, 860/3, Lane, beside Old Jail Street, near Bombay Tools, Nala Bazar, Maruthi Veedhi, Shivaji Nagar, Secunderabad, Telangana 500003";
  const ownerName = "Rai Venkatesh";
  const phone = "+91 8688583959";
  const whatsappNumber = "918688583959";

  const [name, setName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}\nPhone: ${userPhone}\nMessage: ${message}`;
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`, '_blank');
  };

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
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Let us know how we can assist you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSendMessage}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 12345 67890" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9205503487063!2d78.4842223!3d17.4158487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e2a1bb5e9b%3A0x23689be50a31b4b1!2sSELECT%20MEN&#39;S%20TAILOR!5e0!3m2!1sen!2sin!4v1689858853905!5m2!1sen!2sin"
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
