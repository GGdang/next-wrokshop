import { NextResponse } from 'next/server'

export async function GET() {
  // 模擬從數據庫獲取分析數據
  const analyticsData = {
    visitors: Math.floor(Math.random() * 10000),
    pageViews: Math.floor(Math.random() * 50000),
    bounceRate: `${Math.floor(Math.random() * 100)}%`,
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(analyticsData)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // 處理接收到的分析數據
    return NextResponse.json({ success: true, data: body })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}
