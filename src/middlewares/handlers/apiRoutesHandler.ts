import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareHandler } from '../types'

export const apiRoutesHandler: MiddlewareHandler = (request: NextRequest) => {
  const demoParam = request.nextUrl.searchParams.get('demo')
  if (!demoParam) {
    return NextResponse.redirect(new URL('/api-routes-demo?demo=default', request.url))
  }
  return null
}
