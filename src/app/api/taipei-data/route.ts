import { NextResponse } from 'next/server'
import axios from 'axios'

type resultsData = {
  _id: number
  _importdate: {
    date: string
    timezone_type: number
    timezone: string
  }
  廠商: string
  租用起始日: string
  租用結束日: string
  活動名稱: string
  活動類型: string
}

// 定義台北開放資料 API 的回應格式
export interface TaipeiDataResponse {
  result: {
    limit: number
    offset: number
    count: number
    sort: string
    results: resultsData[]
  }
}

export async function GET() {
  try {
    // 從台北市開放資料平台獲取資料
    const response = await axios.get<TaipeiDataResponse>(
      'https://data.taipei/api/v1/dataset/2933d778-8b9f-456a-a801-7579109ab771?scope=resourceAquire'
    )

    // 回傳成功的資料
    return NextResponse.json(response.data)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    // 發生錯誤時回傳 500 錯誤
    return NextResponse.json({ error: '獲取資料失敗' }, { status: 500 })
  }
}
