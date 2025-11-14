"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
// Import icon from lucide-react
import { GalleryVerticalEnd } from "lucide-react";

export function ForgotPasswordForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset link requested.");
    // navigate to OTP verification step after requesting reset link
    router.push("/otp");
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">Forgot Your Password?</h1>
            <FieldDescription>
              Enter your email address below to receive a password reset link.
            </FieldDescription>
          </div>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <Button
              type="submit"
              className="w-full"
            >
              Send Reset Link
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <div className="flex flex-col gap-4">
        <FieldDescription className="text-center">
          Remembered your password?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </FieldDescription>
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </FieldDescription>
      </div>
    </div>
  );
}