"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
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
import LoadingButton from "./LoadingButton";
import AuthBottom from "./AuthBottom";
import { signinSchema } from "@/validations/validation";

type SigninFormValues = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const router = useRouter()
  const { isSigningIn,signin, signinError } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SigninFormValues) => {
    signin(data, router)
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-2 md:p-0">
      <div className="w-full max-w-3xl min-h-[70vh] grid md:grid-cols-2 gap-8 bg-light-auth dark:bg-dark-auth rounded-2xl shadow-lg md:overflow-hidden">
        <Card className="md:col-span-1 flex flex-col justify-center h-full md:border-none shadow-none md:bg-primary-foreground/10 backdrop-blur-3xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">
              Log In
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
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
                {signinError && (
                  <Alert variant="destructive">
                    <AlertDescription>{signinError}</AlertDescription>
                  </Alert>
                )}
                <LoadingButton
                  loading={isSigningIn}
                  loadingTitle="Signing in"
                  title="Sign in"
                  type="submit"
                />
                <div className="flex justify-center mt-4">
                  <a href="/auth/forgot-password" className="text-blue-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <AuthBottom
              href="/auth/register"
              title="Don't have an account?"
              toTitle="Create One!"
            />
          </CardFooter>
        </Card>
        <div className="hidden md:flex flex-col justify-center p-4">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <h2 className="text-xl">
            We're glad to see you again! Please sign in to continue.
          </h2>
        </div>
      </div>
    </main>
  );
}
