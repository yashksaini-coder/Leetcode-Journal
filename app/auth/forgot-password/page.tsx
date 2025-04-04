'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabaseClient'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })

    if (error) {
      setStatus('error')
      console.error('Error sending reset email:', error.message)
    } else {
      setStatus('sent')
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Forgot Password</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4 align-center'>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-center">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </div>
          </form>
          {status === 'sent' && (
            <Alert variant="default" className="mt-4">
              <AlertDescription>Check your email for the reset link.</AlertDescription>
            </Alert>
          )}
          {status === 'error' && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>Failed to send reset link. Please try again.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </main>
  )
} 