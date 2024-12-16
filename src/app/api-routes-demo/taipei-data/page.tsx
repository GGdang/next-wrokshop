'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TaipeiDataResponse } from '@/app/api/taipei-data/route'
import Link from 'next/link'

// 獲取資料的函數
const fetchTaipeiData = async (): Promise<TaipeiDataResponse> => {
  const { data } = await axios.get('/api/taipei-data')
  return data
}

export default function TaipeiDataPage() {
  // 使用 react-query 獲取資料
  const { data, isLoading, isError, error } = useQuery<TaipeiDataResponse>({
    queryKey: ['taipeiData'],
    queryFn: fetchTaipeiData,
  })

  // 載入中狀態
  if (isLoading) {
    return <div className='p-4'>資料載入中...</div>
  }

  // 錯誤狀態
  if (isError) {
    return <div className='p-4 text-red-500'>發生錯誤：{(error as Error).message}</div>
  }

  // 渲染資料
  return (
    <div className='p-4'>
      <div className='mb-4'>
        <Link href='/api-routes-demo' className='text-blue-500 hover:underline'>
          ← 返回
        </Link>
      </div>
      <h1 className='text-2xl font-bold mb-4'>台北市開放資料</h1>
      <div className='space-y-4'>
        <p>總筆數：{data?.result.count}</p>
        <div className='grid gap-4'>
          {data?.result.results.map((item, index) => (
            <div key={index} className='p-4 border rounded shadow'>
              <div className='space-y-2'>
                <p><span className='font-bold'>廠商：</span>{item.廠商}</p>
                <p><span className='font-bold'>活動名稱：</span>{item.活動名稱}</p>
                <p><span className='font-bold'>活動類型：</span>{item.活動類型}</p>
                <p><span className='font-bold'>租用期間：</span>{item.租用起始日} ~ {item.租用結束日}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
