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
import LoadingButton from "../Buttons/LoadingButton";
import AuthBottom from "./AuthBottom";
import { signinSchema } from "@/validations/validation";

type SigninFormValues = z.infer<typeof signinSchema>;

export default function SigninForm() {
  const { isSigningIn, signin, signinError } = useAuthStore();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SigninFormValues) => {
    signin(data, router);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 md:dark:bg-dark-auth md:bg-light-auth md:bg-no-repeat object-cover rounded-xl md:p-10 gap-10">
        <Card className="w-full md:border-none md:bg-white/10 backdrop-blur-3xl max-w-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
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
                        <Input placeholder="you@example.com" {...field} />
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
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <AuthBottom
              href="/auth/register"
              title="Don't have an account? "
              toTitle="Create One!"
            />
          </CardFooter>
        </Card>
        <div className="h-96 md:flex hidden flex-col justify-center w-96">
          <div>
            <h1 className="text-7xl font-semibold">Welcome</h1>
            <h1 className="text-7xl font-semibold">Back</h1>
          </div>

          <h2 className="text-2xl mt-4">
            We're glad to see you again! Please sign in to continue.
          </h2>
        </div>
      </div>
    </main>
  );
}
