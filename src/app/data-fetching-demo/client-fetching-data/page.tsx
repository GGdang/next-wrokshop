import { RealTimeSeats } from './components/RealTimeSeats'

export default function ClientFetchingData() {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-8'>客戶端數據獲取示例</h1>

      {/* 客戶端數據獲取示例 */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold mb-4'>即時座位資訊</h2>
        <p className='text-gray-600 mb-4'>這個組件展示了如何在客戶端使用 useEffect 獲取數據，並實現自動更新：</p>
        <ul className='list-disc list-inside mb-6 text-gray-600'>
          <li>使用 useState 管理數據狀態</li>
          <li>使用 useEffect 在組件掛載時獲取數據</li>
          <li>處理加載和錯誤狀態</li>
          <li>顯示最後更新時間</li>
        </ul>
        <RealTimeSeats />
      </section>
    </div>
  )
}
