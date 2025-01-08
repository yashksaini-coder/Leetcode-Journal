import prisma from "@/lib/database/prismaClient";
import { supabase } from "@/lib/supabaseClient";
import { hashPassword } from "@/utils/hashing";
import { signupSchema } from "@/validations/validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password, fullName, leetcodeUsername, gender } = body;
    try {
        const { success, error } = signupSchema.safeParse({ email, password, fullName, leetcodeUsername, gender });

        if (!success) {
            return NextResponse.json({
                success: false,
                message: error.flatten().fieldErrors,
            }, { status: 400 });
        }

        
        const userExists = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (userExists) {
            return NextResponse.json({
                success: false,
                message: "User with this email already exists.",
            }, { status: 404 });
        }

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password: password,
        });
        
        if (signUpError) {
            return NextResponse.json({
                success: false,
                message: signUpError.message,
            }, { status: 401 });
        }
        
        const supabaseId = signUpData.user?.id;
        
        if (!supabaseId) {
            return NextResponse.json({
                success: false,
                message: "Failed to retrieve Supabase user ID.",
            }, { status: 400 });
        }
        
        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
                leetcodeUsername,
                gender,
                supabaseId: supabaseId,
                isVerified: false,
            }
        });

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            user,
        }, { status: 201 });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}