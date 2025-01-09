import { NextResponse } from 'next/server'
import { getSeats, updateSeatCount } from './actions'

export async function GET() {
  const result = await getSeats()
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }
  return NextResponse.json(result.data)
}

export async function PUT(request: Request) {
  try {
    const { id, freeCount } = await request.json()
    const result = await updateSeatCount(id, freeCount)
    
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }
    
    return NextResponse.json(result.data)
  } catch (error) {
    console.error('Error updating seat:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update seat' },
      { status: 500 }
    )
  }
}
