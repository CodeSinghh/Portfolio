"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { generateArticlePreview } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  error: null,
  success: false,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Generating..." : "Generate Preview"}
    </Button>
  );
}

const ArticlePreviewGenerator = () => {
  const [state, formAction] = useActionState(generateArticlePreview, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card className="bg-card shadow-md">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-center">Subscriber Special</CardTitle>
        <CardDescription className="text-center pt-1">
          Enter a URL to generate a custom news headline and analysis.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input name="url" placeholder="https://example.com" required />
          <SubmitButton />
        </form>

        {state.success && state.data && (
          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="font-headline text-xl font-bold">{state.data.headline}</h3>
            <p className="font-body text-base/loose mt-2 text-justify">{state.data.analysis}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticlePreviewGenerator;
