'use server'

import { revalidatePath } from 'next/cache'
import { queries } from '@/lib/db'

type CreateSeatData = {
  branch_name: string
  area_name: string
  floor_name: string
  total_count: number
  free_count: number
  area_id: number
}

export async function createSeat(data: CreateSeatData) {
  try {
    // 驗證必填欄位
    if (!data.branch_name || !data.area_name || !data.floor_name || !data.total_count || !data.free_count) {
      return {
        success: false,
        error: '所有欄位都是必填的',
      }
    }

    // 驗證數值
    if (data.total_count < 1) {
      return {
        success: false,
        error: '總座位數必須大於 0',
      }
    }

    if (data.free_count < 0 || data.free_count > data.total_count) {
      return {
        success: false,
        error: '可用座位數必須介於 0 和總座位數之間',
      }
    }
    // 建立新座位
    const newSeat = await queries.createSeat(data)

    // 重新驗證頁面
    revalidatePath('/data-fetching-demo/server-actions-and-mutations')

    return {
      success: true,
      data: newSeat,
    }
  } catch (error: any) {
    console.error('建立座位時發生錯誤:', error)
    return {
      success: false,
      error: error.message || '建立座位時發生錯誤',
    }
  }
}
