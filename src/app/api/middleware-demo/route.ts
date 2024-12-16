import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Middleware Demo API' })
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({ 
    message: 'Received data',
    data,
    timestamp: new Date().toISOString()
  })
}
