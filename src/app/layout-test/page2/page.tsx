export default function Page2() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">頁面 2</h1>
      
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">這是頁面 2 的內容</h2>
        <p className="text-gray-600">
          再次觀察切換頁面時的變化：
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
          <li>Template 時間戳又更新了</li>
          <li>Layout 時間戳依然保持初始值</li>
          <li>動畫再次播放</li>
          <li>側邊欄保持穩定</li>
        </ul>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <p className="text-green-800">
          這就是 Layout 和 Template 的主要區別：
          <br />
          Layout 在路由間保持狀態，Template 則每次都重新渲染。
        </p>
      </div>
    </div>
  )
}
