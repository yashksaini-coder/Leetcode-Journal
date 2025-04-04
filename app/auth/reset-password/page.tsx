'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabaseClient'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'updating' | 'updated' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    setStatus('updating')

    // Use the access token to update the user's password
    const { data, error } = await supabase.auth.updateUser({ password: newPassword })

    if (error) {
      setStatus('error')
      console.error('Error updating password:', error.message)
    } else {
      setStatus('updated')
      // Redirect to login or another page after successful password update
      setTimeout(() => {
        router.push('/auth/signin')
      }, 2000)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Set New Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
            {errorMessage && (
              <Alert variant="destructive" className="mt-2">
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
            <Button type="submit" disabled={status === 'updating'}>
              {status === 'updating' ? 'Updating...' : 'Set New Password'}
            </Button>
          </form>
          {status === 'updated' && (
            <Alert variant="default" className="mt-4">
              <AlertDescription>Password updated successfully! Redirecting to sign in...</AlertDescription>
            </Alert>
          )}
          {status === 'error' && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>Failed to update password. Please try again.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </main>
  )
}