import z from 'zod';

export const signupSchema = z.object({
    email: z
        .string()
        .email({ message: "Please provide a valid email address." }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(20, { message: "Your password cannot exceed 20 characters" })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#^])[A-Za-z@$!%*?&#^]{6,}$/,
            {
                message: "Password must include at least one uppercase letter, one lowercase letter, and one special character",
            }
        ),
    fullName: z
        .string()
        .nonempty({ message: "Full name is required." }),
    leetcodeUsername: z
        .string()
        .nonempty({ message: "Leetcode username is required to connect your profile" }),
    gender: z
        .string()
        .nonempty({ message: "Please select your gender " }),
});

export const signinSchema = z.object({
    email: z.string().email({ message: "Please provide a valid email address." }),
    password: z.string().nonempty({ message: "Password is required." }),
});


