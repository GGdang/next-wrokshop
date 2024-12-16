import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareHandler } from '../types'

export const middlewareAboutHandler: MiddlewareHandler = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  
  // 只有當路徑完全匹配 /middleware-demo/about 時才進行重定向
  if (pathname === '/middleware-demo/about') {
    return NextResponse.redirect(new URL('/middleware-demo/about-demo', request.url))
  }
  
  // 其他情況直接放行
  return NextResponse.next()
}
