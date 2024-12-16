import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({ 
    message: 'Protected route accessed successfully',
    data,
    timestamp: new Date().toISOString()
  })
}
