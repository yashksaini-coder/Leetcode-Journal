'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { email, password } = formData;

        try {
            // Attempt user login
            const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });

            if (loginError) {
                throw new Error(loginError.message);
            }

            // Redirect to dashboard if login succeeds
            if (data.session) {
                router.push('/dashboard');
            } else {
                throw new Error('Unable to retrieve session after login.');
            }
        } catch (err: any) {
            console.error('Login Error:', err);
            setError(err.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="p-6 rounded-lg shadow-lg ">
                    <h2 className="text-2xl font-bold mb-4">Log In</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
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

                        {/* Password Field */}
                        <div className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        {/* Submit Button */}
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Logging in...' : 'Log In'}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginForm;
