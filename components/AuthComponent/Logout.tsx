"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { LogOut } from "lucide-react";
import { signout } from "@/app/actions/action";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type buttonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

export default function Logout({ variant = "default" }: { variant?: buttonVariant }) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      signout();
      router.push("/auth/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={variant} size={"sm"}>
          Logout
          <LogOut />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will Logout you from the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
