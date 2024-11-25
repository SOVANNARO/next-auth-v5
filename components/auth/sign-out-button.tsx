"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/auth/login" });
      toast.success("Signed out successfully");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="ghost"
      size="sm"
      className="text-gray-700"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Sign out
    </Button>
  );
}