import * as z from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
  leetcodeUsername: z.string().min(1, "LeetCode username is required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
});

export const signinSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
