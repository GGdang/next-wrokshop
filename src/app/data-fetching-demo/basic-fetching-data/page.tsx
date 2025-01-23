import { Seat } from '@/app/api/seats/types'

export default async function BasicFetchingData() {
  // 使用 try-catch 來處理可能的錯誤
  try {
    const res = await fetch('https://seat.tpml.edu.tw/sm/service/getAllArea')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return (
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8'>基礎伺服器端數據獲取示例</h1>

        {/* 基礎數據展示 */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>臺北市立圖書館即時座位資訊</h2>
          <p className='text-gray-600 mb-4'>本示例展示了如何在 Next.js 中實現基礎的伺服器端數據獲取：</p>
          <ul className='list-disc list-inside mb-6 text-gray-600'>
            <li>使用 async/await 方式進行非同步數據獲取</li>
            <li>實現基本的錯誤處理機制</li>
            <li>在伺服器端完成數據處理，減輕客戶端負擔</li>
            <li>展示實際場景的數據應用</li>
          </ul>

          {/* 數據顯示區域 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.map((area: Seat) => (
              <div key={area.areaId} className='bg-white p-4 rounded-lg shadow'>
                <h3 className='font-semibold text-lg mb-2'>
                  {area.areaName}-{area.branchName}-{area.floorName}
                </h3>
                <div className='text-gray-600'>
                  <p>總座位數：{area.totalCount}</p>
                  <p>目前可用：{area.freeCount}</p>
                  <p>使用中：{area.totalCount - area.freeCount}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技術說明 */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>技術實現說明</h2>
          <div className='bg-gray-50 p-6 rounded-lg'>
            <p className='text-gray-600'>
              此頁面採用 Next.js 的伺服器端組件（Server Components）進行數據獲取。
              相較於客戶端獲取，伺服器端獲取可以提供更好的首次加載體驗， 並且能夠避免客戶端的額外請求開銷。
            </p>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.log('Error fetching data:', error)
    return (
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8'>基礎伺服器端數據獲取示例</h1>
        <div className='bg-red-50 border-l-4 border-red-500 p-4'>
          <p className='text-red-700'>很抱歉，在獲取座位資訊時發生錯誤。請稍後重試或聯繫系統管理員。</p>
        </div>
      </div>
    )
  }
}
