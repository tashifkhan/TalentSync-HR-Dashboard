"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // This component still uses the standard Label
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";
// Import icon from lucide-react
import { GalleryVerticalEnd } from "lucide-react";

export function RoleSelectionForm() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedRole) {
      console.log("Selected role:", selectedRole);
    } else {
      console.log("No role selected.");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
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
          <h1 className="text-xl font-bold">Select Your Role</h1>
          <FieldDescription>
            Choose your primary role to continue.
          </FieldDescription>
        </div>

        {/* RadioGroup fits nicely inside the FieldGroup */}
        <RadioGroup
          value={selectedRole || ""}
          onValueChange={setSelectedRole}
          className="grid gap-4"
        >
          <Label
            htmlFor="role-admin"
            className="flex items-center space-x-3 rounded-md border p-4 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="admin" id="role-admin" />
            <div>
              <span className="font-medium">Admin</span>
              <p className="text-sm text-muted-foreground">
                Full access to all system settings.
              </p>
            </div>
          </Label>

          <Label
            htmlFor="role-hr"
            className="flex items-center space-x-3 rounded-md border p-4 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="hr" id="role-hr" />
            <div>
              <span className="font-medium">HR</span>
              <p className="text-sm text-muted-foreground">
                Manage employee profiles and recruitment.
              </p>
            </div>
          </Label>

          <Label
            htmlFor="role-hr-manager"
            className="flex items-center space-x-3 rounded-md border p-4 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="hr-manager" id="role-hr-manager" />
            <div>
              <span className="font-medium">HR Manager</span>
              <p className="text-sm text-muted-foreground">
                Oversee the HR team and department reports.
              </p>
            </div>
          </Label>
        </RadioGroup>

        <Field>
          <Button
            className="w-full"
            onClick={handleContinue}
            disabled={!selectedRole}
          >
            Continue
          </Button>
        </Field>
      </FieldGroup>
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
  );
}