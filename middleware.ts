import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function middleware(req: Request) {
    const { data: session } = await supabase.auth.getSession();
    const { pathname } = new URL(req.url);

    if (pathname.startsWith('/dashboard') && !session) {
        return NextResponse.redirect(('/login'));
    }
        
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
