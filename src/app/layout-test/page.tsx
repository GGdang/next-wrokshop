export default function LayoutTestPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Layout 和 Template 示例</h1>

      <div className='prose'>
        <h2>觀察以下特點：</h2>
        <ul>
          <li>
            左側 Layout 的時間戳在路由切換時<strong>保持不變</strong>
          </li>
          <li>
            上方 Template 的時間戳在每次路由切換時<strong>都會更新</strong>
          </li>
          <li>內容區域在路由切換時會有淡入動畫（由 Template 提供）</li>
          <li>側邊欄在路由切換時保持穩定（由 Layout 提供）</li>
        </ul>
      </div>

      <div className='p-4 bg-yellow-50 rounded-lg'>
        <p className='text-yellow-800'>試試點擊左側導航欄的不同頁面，觀察各個時間戳的變化！</p>
      </div>
    </div>
  )
}
