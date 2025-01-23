import { PrismaClient } from '@prisma/client'

// 避免在開發時創建多個實例
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// 定義查詢函數
export const queries = {
  // 獲取所有座位
  getAllSeats: async () => {
    return prisma.librarySeats.findMany({
      orderBy: [{ branchName: 'asc' }, { areaName: 'asc' }],
    })
  },

  // 根據分館獲取座位
  getSeatsByBranch: async (branchName: string) => {
    return prisma.librarySeats.findMany({
      where: {
        branchName,
      },
      orderBy: {
        areaName: 'asc',
      },
    })
  },

  // 獲取可用座位數量大於特定值的區域
  getAvailableSeats: async (minFreeCount: number) => {
    return prisma.librarySeats.findMany({
      where: {
        freeCount: {
          gte: minFreeCount,
        },
      },
      orderBy: {
        freeCount: 'desc',
      },
    })
  },

  // 創建新座位
  createSeat: async (data: {
    branch_name: string
    area_name: string
    floor_name: string
    total_count: number
    free_count: number
    area_id: number
  }) => {
    try {
      const result = await prisma.librarySeats.create({
        data: {
          branchName: data.branch_name,
          areaName: data.area_name,
          floorName: data.floor_name,
          totalCount: data.total_count,
          freeCount: data.free_count,
          areaId: data.area_id,
        },
      })
      return result
    } catch (error) {
      console.error('--createSeat error--', error)
      throw error
    }
  },
}

// 測試連接
prisma
  .$connect()
  .then(() => {
    console.log('Successfully connected to PostgreSQL')
  })
  .catch((err) => {
    console.error('Error acquiring client', err.stack)
  })
