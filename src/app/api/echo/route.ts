import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({
    message: `服務器收到消息：${body.message}`,
  })
}
