import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareHandler } from '../types'

export const layoutDemoHandler: MiddlewareHandler = (request: NextRequest, response: NextResponse) => {
  // 檢查用戶的瀏覽器資訊
  const userAgent = request.headers.get('user-agent') || ''
  response.headers.set('x-browser-info', userAgent)

  // 可以根據時間來控制訪問
  const hour = new Date().getHours()
  if (hour < 8 || hour > 22) {
    return new NextResponse(
      JSON.stringify({ error: '此頁面僅在營業時間內開放' }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
  return null
}
