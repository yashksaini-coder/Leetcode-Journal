"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserType } from "@/types/typeInterfaces";
import { useAuthStore } from "@/store/AuthStore/useAuthStore";
import AuthBottom from "./AuthBottom";
import LoadingButton from "../Buttons/LoadingButton";

export default function SignupForm() {
  const { isSigningUp, signup, signupError } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState<UserType>({
    fullName: "",
    email: "",
    password: "",
    leetcodeUsername: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, gender: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signup(formData, router);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Register your Account
          </CardTitle>
          <CardDescription>
            Sign up to start your coding journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

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
                minLength={6}
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leetcodeUsername">LeetCode Username</Label>
              <Input
                id="leetcodeUsername"
                name="leetcodeUsername"
                type="text"
                placeholder="Your LeetCode Username"
                value={formData.leetcodeUsername}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={formData.gender}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {signupError && (
              <Alert variant="destructive">
                <AlertDescription>{signupError}</AlertDescription>
              </Alert>
            )}

            <LoadingButton
              loading={isSigningUp}
              loadingTitle="Registering"
              title="Register"
              type="submit"
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <AuthBottom
            href="/auth/signin"
            title="Already have an account?"
            toTitle="Sign In"
          />
        </CardFooter>
      </Card>
    </main>
  );
}
