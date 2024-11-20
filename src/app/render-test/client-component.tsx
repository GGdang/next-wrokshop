'use client'

import { useState, useEffect } from 'react'

export default function ClientComponent({
  initialData,
}: {
  initialData: { user: string; role: string; lastLogin: string }
}) {
  // 使用 initialData 作為初始狀態
  const [data, setData] = useState(initialData)
  const [refreshCount, setRefreshCount] = useState(0)

  // 模擬 API 調用
  const refreshData = async () => {
    // 實際應用中，這裡會是真實的 API 調用
    const response = await fetch('/api/user-data')
    const newData = {
      user: initialData.user,
      role: initialData.role,
      lastLogin: new Date().toISOString() // 更新登入時間
    }
    setData(newData)
    setRefreshCount(prev => prev + 1)
  }

  return (
    <div className='space-y-4'>
      <div className='bg-gray-100 p-4 rounded'>
        <h3 className='font-bold mb-2'>特點：</h3>
        <ul className='list-disc list-inside space-y-2'>
          <li>在瀏覽器端渲染</li>
          <li>可以使用 useState, useEffect 等 hooks</li>
          <li>可以處理用戶交互</li>
          <li>可以即時更新數據</li>
          <li>可以訪問瀏覽器 API</li>
        </ul>
      </div>

      <div className='bg-blue-50 p-4 rounded'>
        <h3 className='font-bold mb-2'>數據展示：</h3>
        <div className='space-y-2'>
          <p>用戶: {data.user}</p>
          <p>角色: {data.role}</p>
          <p>最後登入: {new Date(data.lastLogin).toLocaleString()}</p>
          <p>刷新次數: {refreshCount}</p>
        </div>
        <button 
          onClick={refreshData}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          刷新數據
        </button>
      </div>

      <div className='text-sm text-gray-500'>
        客戶端渲染時間: {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}
