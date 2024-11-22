import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 添加自定義響應頭
  const response = NextResponse.next()
  response.headers.set('x-middleware-demo', 'true')

  // 記錄請求信息
  console.log(`[Middleware] 訪問路徑: ${request.nextUrl.pathname}`)

  return response
}

// 配置需要執行中間件的路徑
export const config = {
  matcher: [
    '/middleware-demo/:path*',
    '/api/:path*',
  ],
}
