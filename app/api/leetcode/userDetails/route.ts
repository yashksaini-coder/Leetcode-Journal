import prisma from "@/lib/database/prismaClient";
import { getLeetCodeUserDetails } from "@/utils/leetcode/leetcodeContollers";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = await createClient();
        const supabaseUser = (await supabase.auth.getUser()).data.user;

        if (!supabaseUser) {
            return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
        }

        const user = await prisma.user.findFirst({
            where: {
                supabaseId: supabaseUser.id,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const LeetCodeUsername = user.leetcodeUsername;

        const result = await getLeetCodeUserDetails(LeetCodeUsername)
        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}