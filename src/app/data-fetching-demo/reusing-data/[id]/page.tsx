import { cache } from 'react'
import { queries } from '@/lib/db'
import { notFound } from 'next/navigation'

// 使用 React cache 包裝數據庫查詢
// 這確保相同的查詢只會執行一次
const getSeat = cache(async (id: string) => {
  const seats = await queries.getAllSeats()
  const seat = seats.find((s) => s.id === parseInt(id))
  if (!seat) notFound()
  return seat
})

// 生成靜態路徑參數
export async function generateStaticParams() {
  const seats = await queries.getAllSeats()
  return seats.map((seat) => ({
    id: String(seat.id),
  }))
}

// 生成頁面元數據
export async function generateMetadata({ params }: { params: { id: string } }) {
  const seat = await getSeat(params.id)

  return {
    title: `${seat.branchName} - ${seat.areaName}`,
    description: `查看 ${seat.branchName} ${seat.areaName} 的座位情況`,
  }
}

// 默認導出的頁面組件
export default async function SeatPage({ params }: { params: { id: string } }) {
  const seat = await getSeat(params.id)

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>
        {seat.branchName} - {seat.areaName}
      </h1>
    </div>
  )
}
