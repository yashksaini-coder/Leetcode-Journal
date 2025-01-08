import prisma from '@/lib/database/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {

        const { supabaseId } = await request.json();
        const userData = await prisma.user.findUnique({
            where: { supabaseId },
            select: {
                email: true,
                fullName: true,
                leetcodeUsername: true,
                id: true,
                isVerified: true,
                gender: true,
                createdAt: true,
                supabaseId: true,
            }
        });

        if (!userData) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ user: userData },{status: 200});
    } catch (err) {
        console.error('Error fetching user data:', err);
        return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
    }
}
