'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/lib/supabaseClient';

const SignupForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        password: string;
        leetcodeUsername: string;
        gender: string;
    }>({
        name: '',
        email: '',
        password: '',
        leetcodeUsername: '',
        gender: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, gender: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { email, password, name, leetcodeUsername, gender } = formData;

            // Sign up the user
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                
            });

            if (signUpError) {
                throw new Error(signUpError.message);
            }

            const userId = signUpData?.user?.id;

            // Insert additional user information
            if (userId) {
                const { error: insertError } = await supabase.from('user_info').insert([
                    {
                        user_id: userId,
                        name,
                        leetcode_username: leetcodeUsername,
                        gender,
                    },
                ]);

                if (insertError) {
                    throw new Error(insertError.message);
                }
            } else {
                throw new Error('User ID not found. Please try again.');
            }

            // Redirect to the dashboard
            router.push('/dashboard');
        } catch (err: any) {
            console.error('Error:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

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

                        {/* LeetCode Username Field */}
                        <div className="mb-4">
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

                        {/* Gender Field */}
                        <div className="mb-4 space-y-1">
                            <Label htmlFor="gender">Gender</Label>
                            <Select value={formData.gender} onValueChange={handleSelectChange}>
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

                        {/* Error Message */}
                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        {/* Submit Button */}
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Submitting...' : 'Sign Up'}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignupForm;
