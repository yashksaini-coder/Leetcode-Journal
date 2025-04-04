import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ 
        message: 'Backend API service is healthy',
        status: 'healthy',
        timestamp: new Date().toISOString()
    }, { status: 200 });
}
