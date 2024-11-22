export default function Demo() {
  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-8'>Demo 頁面</h1>
      
      <div className='space-y-6'>
        <p className='text-gray-600'>
          這是一個正常的頁面，因為它被明確定義在 /not-found-demo/demo/page.tsx 中。
        </p>

        <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
          <h2 className='text-xl font-semibold'>路由處理邏輯：</h2>
          <ul className='list-disc pl-5 space-y-2 text-gray-600'>
            <li>
              <code className='bg-gray-200 px-2 py-1 rounded'>/not-found-demo/demo</code> 
              → 顯示這個頁面
            </li>
            <li>
              <code className='bg-gray-200 px-2 py-1 rounded'>/not-found-demo/abc</code> 
              → 被 [...not_found] 捕獲 → 顯示 404
            </li>
            <li>
              <code className='bg-gray-200 px-2 py-1 rounded'>/not-found-demo/xyz/123</code> 
              → 被 [...not_found] 捕獲 → 顯示 404
            </li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>工作原理：</h2>
          <ol className='list-decimal pl-5 space-y-2 text-gray-600'>
            <li>Next.js 收到請求</li>
            <li>檢查是否有對應的頁面定義</li>
            <li>如果沒有，進入 [...not_found] 路由</li>
            <li>觸發 notFound()</li>
            <li>顯示 not-found.tsx 的內容</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
