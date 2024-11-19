'use client'

import { useState, useEffect } from 'react'

export default function ClientComponent({ 
  initialData 
}: { 
  initialData: { user: string; role: string; lastLogin: string } 
}) {
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    // 客戶端特有的功能：更新當前時間
    setCurrentTime(new Date().toLocaleTimeString())
  }, [])

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">特點：</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>在瀏覽器端渲染</li>
          <li>可以使用 useState, useEffect 等 hooks</li>
          <li>可以添加事件監聽器</li>
          <li>可以訪問瀏覽器 API</li>
          <li>適合互動性強的界面</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded">
        <h3 className="font-bold mb-2">互動示例：</h3>
        <button
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          點擊次數: {count}
        </button>
      </div>

      <div className="bg-blue-50 p-4 rounded">
        <h3 className="font-bold mb-2">數據展示：</h3>
        <div className="space-y-2">
          <p>用戶: {initialData.user}</p>
          <p>角色: {initialData.role}</p>
          <p>最後登入: {new Date(initialData.lastLogin).toLocaleString()}</p>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        客戶端渲染時間: {currentTime}
      </div>
    </div>
  )
}
