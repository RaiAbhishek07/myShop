'use server';
/**
 * @fileOverview A style recommendation AI agent.
 *
 * - generateStyleRecommendations - A function that handles the style recommendation process.
 * - GenerateStyleRecommendationsInput - The input type for the generateStyleRecommendations function.
 * - GenerateStyleRecommendationsOutput - The return type for the generateStyleRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStyleRecommendationsInputSchema = z.object({
  requirements: z
    .string()
    .describe('The specific requirements for the suit, e.g., fit, fabric, color.'),
  event: z.string().describe('The upcoming event for which the suit is needed.'),
});
export type GenerateStyleRecommendationsInput = z.infer<
  typeof GenerateStyleRecommendationsInputSchema
>;

const GenerateStyleRecommendationsOutputSchema = z.object({
  styleRecommendations: z
    .string()
    .describe('Tailored style recommendations for the suit.'),
});
export type GenerateStyleRecommendationsOutput = z.infer<
  typeof GenerateStyleRecommendationsOutputSchema
>;

export async function generateStyleRecommendations(
  input: GenerateStyleRecommendationsInput
): Promise<GenerateStyleRecommendationsOutput> {
  return generateStyleRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStyleRecommendationsPrompt',
  input: {schema: GenerateStyleRecommendationsInputSchema},
  output: {schema: GenerateStyleRecommendationsOutputSchema},
  prompt: `You are an expert tailor specializing in men's suits. Based on the
user's requirements and the upcoming event, provide tailored style recommendations for the suit.

Requirements: {{{requirements}}}
Event: {{{event}}}`,
});

const generateStyleRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateStyleRecommendationsFlow',
    inputSchema: GenerateStyleRecommendationsInputSchema,
    outputSchema: GenerateStyleRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
