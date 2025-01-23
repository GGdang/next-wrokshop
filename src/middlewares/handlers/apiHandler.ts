// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareHandler } from '../types'

export const apiHandler: MiddlewareHandler = (request: NextRequest) => {
  // 如果是 middleware-demo 端點，不需要認證
  if (request.nextUrl.pathname.startsWith('/api/middleware-demo')) {
    return null
  }

  // const token = request.headers.get('authorization')?.replace('Bearer ', '')
  // if (!token) {
  //   console.log('未授權的 API 請求')
  //   return new NextResponse(
  //     JSON.stringify({ error: '需要認證' }),
  //     {
  //       status: 401,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  // }
  return null
}
