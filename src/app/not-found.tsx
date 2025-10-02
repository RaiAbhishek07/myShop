import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <TriangleAlert className="h-24 w-24 text-destructive" />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                404 - Page Not Found
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Oops! It seems you've wandered off the beaten path. The page you are looking for does not exist.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
