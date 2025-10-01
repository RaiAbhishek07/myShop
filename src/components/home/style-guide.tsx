import { StyleGuideForm } from "./style-guide-form";
import { Lightbulb } from "lucide-react";

export function StyleGuide() {
    return (
        <section id="style-guide" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Style Tool</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Find Your Perfect Style
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Unsure where to start? Our AI-powered Style Guide is here to help. Answer a few simple questions, and our expert AI tailor will provide personalized recommendations to help you craft the perfect look for any occasion.
                    </p>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                        <Lightbulb className="mt-1 h-5 w-5" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">How it works</p>
                            <p className="text-sm text-muted-foreground">
                                Simply describe your needs and the event you're attending. Our tool analyzes your input to suggest fabric, color, and fit options that align with your vision.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <StyleGuideForm />
                </div>
            </div>
        </section>
    );
}
