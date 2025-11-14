"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

export function RoleSelectionForm() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleContinue = () => {
    // Handle the logic for when the user clicks continue
    // For example, save the role or navigate to the next page
    if (selectedRole) {
      console.log("Selected role:", selectedRole);
      // alert(`You selected: ${selectedRole}`); // Avoid alert() in real apps
    } else {
      console.log("No role selected.");
      // You might want to show a message
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Select Your Role</CardTitle>
        <CardDescription>
          Choose your primary role to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* We use the onValueChange prop to update state */}
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
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleContinue}
          disabled={!selectedRole}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
}