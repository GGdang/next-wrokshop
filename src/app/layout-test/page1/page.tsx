export default function Page1() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">頁面 1</h1>
      
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">這是頁面 1 的內容</h2>
        <p className="text-gray-600">
          觀察切換到這個頁面時：
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
          <li>Template 的時間戳已更新</li>
          <li>Layout 的時間戳保持不變</li>
          <li>頁面內容有淡入動畫效果</li>
        </ul>
      </div>
    </div>
  )
}
