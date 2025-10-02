'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { getStyleSuggestion, type StyleFormState } from '@/app/actions';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState: StyleFormState = {
  message: null,
  recommendations: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Thinking...' : 'Get Recommendation'}
    </Button>
  );
}

export function StyleGuideForm() {
  const [state, formAction] = useActionState(getStyleSuggestion, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Success!') {
        toast({
            variant: "destructive",
            title: "Something went wrong",
            description: state.message
        });
    }
  }, [state, toast]);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">AI Style Advisor</CardTitle>
          <CardDescription>Fill out the details below for a personalized suggestion.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event">Event Type</Label>
            <Select name="event">
              <SelectTrigger>
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="business">Business / Formal</SelectItem>
                <SelectItem value="gala">Gala / Black Tie</SelectItem>
                <SelectItem value="casual">Casual / Social</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.event && <p className="text-sm font-medium text-destructive">{state.errors.event[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirements">Describe Your Style & Needs</Label>
            <Textarea
              id="requirements"
              name="requirements"
              placeholder="e.g., 'I'm looking for a slim-fit, single-breasted suit in a dark color. I prefer natural fabrics like wool. It's for an autumn wedding.'"
              rows={4}
            />
            {state.errors?.requirements && <p className="text-sm font-medium text-destructive">{state.errors.requirements[0]}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
        {state.recommendations && (
            <div className="p-6 pt-0">
                <div className="mt-4 rounded-lg border bg-secondary p-4">
                    <h4 className="font-bold mb-2 font-headline">Our Recommendation:</h4>
                    <p className="text-sm text-secondary-foreground whitespace-pre-wrap">{state.recommendations}</p>
                </div>
            </div>
        )}
    </Card>
  );
}
