import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { apiHandler, layoutDemoHandler, apiRoutesHandler, middlewareAboutHandler } from './middlewares/handlers'
import type { RouteHandler } from './middlewares/types'

// 配置哪些路徑需要執行 middleware
export const config = {
  matcher: ['/api/:path*', '/api-routes-demo/:path*', '/layout-demo/:path*', '/middleware-demo/:path*'],
}

// 路由處理器配置
const routeHandlers: RouteHandler[] = [
  { path: '/api', handler: apiHandler },
  { path: '/layout-demo', handler: layoutDemoHandler },
  { path: '/api-routes-demo', handler: apiRoutesHandler },
  { path: '/middleware-demo/about', handler: middlewareAboutHandler },
]

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 1. 請求日誌記錄
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`)

  // 2. 尋找並執行對應的路由處理器
  const pathname = request.nextUrl.pathname

  for (const { path, handler } of routeHandlers) {
    if (pathname.startsWith(path)) {
      const result = handler(request, response)
      if (result) return result
    }
  }

  // 3. 添加通用的自定義請求頭
  response.headers.set('x-middleware-cache', 'no-cache')
  response.headers.set('x-middleware-timestamp', new Date().toISOString())

  // 4. 根據請求來源修改響應
  const country = request.geo?.country || 'unknown'
  response.headers.set('x-user-country', country)

  // 5. 效能監控
  const startTime = Date.now()
  response.headers.set('x-request-start-time', startTime.toString())

  return response
}
