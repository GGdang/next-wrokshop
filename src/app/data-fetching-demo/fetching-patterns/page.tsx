import { Suspense } from 'react'
import { queries } from '@/lib/db'

// 模擬延遲的數據獲取函數
async function getLibraryInfo(branchName: string) {
  // 模擬網絡延遲
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    name: branchName,
    address: '台北市中山區中山北路二段xx號',
    openHours: '09:00-21:00',
    contact: '02-xxxx-xxxx'
  }
}

// 預加載函數
const preloadSeats = (branchName: string) => {
  void queries.getSeatsByBranch(branchName)
}

// 座位組件 - 展示順序數據獲取
async function Seats({ branchName }: { branchName: string }) {
  // 這個查詢會等待 LibraryInfo 組件完成後才開始
  const seats = await queries.getSeatsByBranch(branchName)

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">座位資訊</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className="p-4 bg-white rounded-lg shadow-sm border"
          >
            <h4 className="font-medium">{seat.areaName}</h4>
            <p className="text-gray-600">{seat.floorName}</p>
            <p className="mt-2">
              可用座位：{seat.freeCount} / {seat.totalCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// 圖書館信息組件 - 展示並行數據獲取
async function LibraryInfo({ branchName }: { branchName: string }) {
  // 這個查詢會與 Seats 組件的查詢並行執行
  const info = await getLibraryInfo(branchName)

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-medium mb-4">{info.name}</h3>
      <dl className="grid grid-cols-2 gap-4">
        <div>
          <dt className="text-sm text-gray-500">地址</dt>
          <dd className="mt-1">{info.address}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">開放時間</dt>
          <dd className="mt-1">{info.openHours}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">聯絡電話</dt>
          <dd className="mt-1">{info.contact}</dd>
        </div>
      </dl>
    </div>
  )
}

export default function FetchingPatterns() {
  const branchName = '總館'

  // 預加載座位數據
  preloadSeats(branchName)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">數據獲取模式示例</h1>

      {/* 說明部分 */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">數據獲取模式說明</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">1. 順序數據獲取</h3>
            <p className="text-gray-700">
              在 Seats 組件中，數據獲取會等待父組件完成後才開始。這適用於依賴於父組件數據的情況。
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">2. 並行數據獲取</h3>
            <p className="text-gray-700">
              LibraryInfo 和 Seats 組件的數據獲取會同時進行，提高加載效率。
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">3. 預加載模式</h3>
            <p className="text-gray-700">
              使用 preloadSeats 函數在組件渲染前就開始獲取數據，進一步優化加載時間。
            </p>
          </div>
        </div>
      </div>

      {/* 數據展示部分 */}
      <div className="space-y-8">
        {/* 使用 Suspense 包裝異步組件 */}
        <Suspense
          fallback={
            <div className="bg-white p-6 rounded-lg shadow-sm border animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          }
        >
          <LibraryInfo branchName={branchName} />
        </Suspense>

        <Suspense
          fallback={
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="grid gap-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg shadow-sm border"
                  >
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <Seats branchName={branchName} />
        </Suspense>
      </div>

      {/* 代碼示例 */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">實現代碼</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            {`// 預加載模式
const preloadSeats = (branchName: string) => {
  void queries.getSeatsByBranch(branchName)
}

// 並行數據獲取
<Suspense fallback={<Loading />}>
  <LibraryInfo branchName={branchName} />
</Suspense>
<Suspense fallback={<Loading />}>
  <Seats branchName={branchName} />
</Suspense>

// 順序數據獲取
async function Seats({ branchName }) {
  const seats = await queries.getSeatsByBranch(branchName)
  return <div>{/* 渲染座位數據 */}</div>
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
