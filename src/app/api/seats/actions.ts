'use server'

import { prisma } from '@/lib/db'
import { ActionResult, Seat } from './types'

// 獲取所有座位
export async function getSeats(): Promise<ActionResult<Seat[]>> {
  try {
    const seats = await prisma.librarySeats.findMany({
      orderBy: [{ branchName: 'asc' }, { areaName: 'asc' }],
    })
    return { success: true, data: seats }
  } catch (error) {
    console.error('Error fetching seats:', error)
    return { success: false, error: 'Failed to fetch seats' }
  }
}

// 更新座位數量
export async function updateSeatCount(
  id: number,
  newCount: number
): Promise<ActionResult<Seat>> {
  try {
    const seat = await prisma.librarySeats.update({
      where: { id },
      data: {
        freeCount: newCount,
        updatedAt: new Date(),
      },
    })
    return { success: true, data: seat }
  } catch (error) {
    console.error('Error updating seat count:', error)
    return { success: false, error: 'Failed to update seat count' }
  }
}
