import { NextRequest, NextResponse } from 'next/server'

export type MiddlewareHandler = (
  request: NextRequest,
  response: NextResponse
) => Promise<NextResponse> | NextResponse | undefined | null

export interface RouteHandler {
  path: string
  handler: MiddlewareHandler
}
