'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Mail } from 'lucide-react'

export default function VerifyPage() {
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleResendEmail = async () => {
    setResendStatus('sending')
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResendStatus('sent')
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <Mail className="h-10 w-10 text-blue-600" />
          </div>
          <CardTitle className="text-center text-2xl">Verify Your Email</CardTitle>
          <CardDescription className="text-center">
            We've sent a verification link to your registered email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-neutral-600">
            Please check your inbox and click on the verification link to complete your registration.
            If you don't see the email, please check your spam folder.
          </p>
        </CardContent>
        {/* <CardFooter className="flex flex-col items-center space-y-4">
          <Button
            onClick={handleResendEmail}
            disabled={resendStatus === 'sending' || resendStatus === 'sent'}
          >
            {resendStatus === 'sending' ? 'Resending...' : 'Resend Verification Email'}
          </Button>
          {resendStatus === 'sent' && (
            <Alert variant="default" className="mt-4">
              <AlertDescription>Verification email has been resent successfully.</AlertDescription>
            </Alert>
          )}
          {resendStatus === 'error' && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>Failed to resend verification email. Please try again later.</AlertDescription>
            </Alert>
          )}
        </CardFooter> */}
      </Card>
    </main>
  )
}

