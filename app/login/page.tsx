import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="ts-card w-full max-w-sm p-6">
        <div className="text-center mb-6">
          <div className="text-2xl font-semibold">TalentSync</div>
          <div className="text-xs text-[var(--ts-text-muted-70)]">Sign in</div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs mb-1 text-[var(--ts-text-muted-70)]">Email</label>
            <Input placeholder="you@company.com" type="email" />
          </div>
          <div>
            <label className="block text-xs mb-1 text-[var(--ts-text-muted-70)]">Password</label>
            <Input placeholder="••••••••" type="password" />
          </div>
          <Button className="w-full">Sign In</Button>
          <div className="text-xs text-center text-[var(--ts-text-muted-50)]">or</div>
          <Button variant="outline" className="w-full">Continue with Google</Button>
        </div>
      </div>
    </div>
  );
}
