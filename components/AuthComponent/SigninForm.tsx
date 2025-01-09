"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAuthStore } from "@/store/AuthStore/useAuthStore"
import LoadingButton from "../Buttons/LoadingButton"
import AuthBottom from "./AuthBottom"
import { signinSchema } from "@/validations/validation"

type SigninFormValues = z.infer<typeof signinSchema>

export default function SigninForm() {
  const { isSigningIn, signin, signinError } = useAuthStore()
  const router = useRouter()

  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: SigninFormValues) => {
    signin(data, router)
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      <Input type="password" placeholder="••••••••" {...field} />
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
    </main>
  )
}