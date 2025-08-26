"use server";

import { z } from "zod";

const schema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

type State = {
  error?: string | null;
  success?: boolean;
  data?: {
    headline: string;
    analysis: string;
  } | null;
}

export async function generateArticlePreview(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    url: formData.get("url"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.url?.[0] || 'Invalid input.',
    };
  }

  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Mock AI response
  return {
    success: true,
    data: {
      headline: "AI Predicts: Submitted URL Leads to Digital Enlightenment!",
      analysis: "Our advanced analytical engine has processed the provided URL and determined, with high confidence, that its contents are of a most profound nature. It speaks of revolutionary concepts that could reshape our understanding of the digital aether. The tone is authoritative, yet accessible, suggesting a source of great import and wisdom. Further study is recommended for all subscribers seeking intellectual fortitude.",
    },
  };
}
