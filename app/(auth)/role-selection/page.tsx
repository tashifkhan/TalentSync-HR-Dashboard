import { RoleSelectionForm } from "@/components/roleSelection"

export default function RoleSelectionPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RoleSelectionForm />
      </div>
    </div>
  )
}
