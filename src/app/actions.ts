'use server';

import { generateStyleRecommendations, GenerateStyleRecommendationsInput } from '@/ai/flows/generate-style-recommendations';
import { z } from 'zod';

const StyleFormSchema = z.object({
  requirements: z.string().min(10, { message: 'Please describe your requirements in a bit more detail.' }),
  event: z.string({ required_error: 'Please select an event type.' }).min(1, { message: 'Please select an event type.' }),
});

export type StyleFormState = {
  message: string | null;
  recommendations: string | null;
  errors?: {
    requirements?: string[];
    event?: string[];
  };
};

export async function getStyleSuggestion(
  prevState: StyleFormState,
  formData: FormData
): Promise<StyleFormState> {
  const validatedFields = StyleFormSchema.safeParse({
    requirements: formData.get('requirements'),
    event: formData.get('event'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please check your input.',
      recommendations: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: GenerateStyleRecommendationsInput = validatedFields.data;
    const result = await generateStyleRecommendations(input);
    
    if (!result.styleRecommendations) {
      return { message: 'We could not generate a recommendation at this time. Please try again.', recommendations: null };
    }
    
    return { message: 'Success!', recommendations: result.styleRecommendations };
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred on the server. Please try again later.', recommendations: null };
  }
}
