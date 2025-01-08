import z from 'zod';

export const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    fullName: z.string().nonempty({ message: "Full name is required" }),
    leetcodeUsername: z.string().nonempty({ message: "Leetcode username is required" }),
    gender: z.string().nonempty({ message: "Gender is required" })
});