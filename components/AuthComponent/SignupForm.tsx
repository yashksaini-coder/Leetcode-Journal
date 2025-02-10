"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
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
import AuthBottom from "./AuthBottom";
import LoadingButton from "./LoadingButton";
import { signupSchema } from "@/validations/validation";
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuthStore } from "@/store/AuthStore/useAuthStore"
import { useAuth } from "@/hooks/useAuth";

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const { isSigningUp, signup, signupError } = useAuthStore();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { isSigningIn, signin, signinError } = useAuthStore()
  const { user, loading } = useAuth()
  const searchParams = useSearchParams()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      leetcodeUsername: "",
      gender: undefined,
    },
  });

  useEffect(() => {
    // If user is already authenticated, redirect to the intended URL or dashboard
    if (user && !loading) {
      const redirectTo = searchParams.get('redirect') || '/dashboard'
      router.push(redirectTo)
    }
  }, [user, loading, router, searchParams])

  const onSubmit = async (data: SignupFormValues) => {
    try {
      signup(data, router);
      // The redirect will be handled by the useEffect above when the user state updates
    } catch (error) {
      console.error('Sign in error:', error)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center md:p-0 p-2">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-light-auth dark:bg-dark-auth rounded-2xl shadow-lg md:overflow-hidden">
        <Card className="md:col-span-1 md:bg-primary-foreground/10 backdrop-blur-3xl md:border-none shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold ">Register</CardTitle>
            <CardDescription>
              Sign up to start your coding journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} className="rounded-md" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••"
                            {...field}
                            className="rounded-md pr-10"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="leetcodeUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LeetCode Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your LeetCode Username"
                          {...field}
                          className="rounded-md"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-md">
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <AuthBottom
              href="/auth/signin"
              title="Already have an account?"
              toTitle="Sign In"
            />
          </CardFooter>
        </Card>
        <div className="hidden md:flex flex-col justify-center p-8">
          <h1 className="text-5xl font-bold mb-4">Join Us Today</h1>
          <h2 className="text-xl">
            Create an account to start your coding journey with us.
          </h2>
        </div>
      </div>
    </main>
  );
}
