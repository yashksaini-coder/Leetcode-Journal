"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthStore } from "@/store/AuthStore/useAuthStore";
import LoadingButton from "../Buttons/LoadingButton";
import AuthBottom from "./AuthBottom";

interface FormData {
  email: string;
  password: string;
}

export default function SigninForm() {
  const { isSigningIn, signin, signinError } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signin(formData, router);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-sm rounded-2xl">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {signinError && (
              <Alert variant="destructive">
                <AlertDescription>{signinError}</AlertDescription>
              </Alert>
            )}

            <LoadingButton
              loading={isSigningIn}
              loadingTitle="Signing in"
              title="Signin"
              type="submit"
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <AuthBottom
            href="/auth/register"
            title="Don't have an account? "
            toTitle="Create One!"
          />
        </CardFooter>
      </Card>
    </main>
  );
}
