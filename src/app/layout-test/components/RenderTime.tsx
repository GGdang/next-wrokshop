'use client'

import { useEffect, useState } from 'react'

export default function RenderTime() {
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    // 只在客戶端設置時間
    setCurrentTime(new Date().toLocaleTimeString())
  }, [])

  // 如果時間還沒設置，返回一個佔位符
  if (!currentTime) {
    return (
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <div className="text-sm text-blue-500">
          載入中...
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8 p-4 bg-blue-50 rounded-lg">
      <div className="text-sm text-blue-500">
        Template 渲染時間: {currentTime}
        <br />
        （每次路由變化時都會更新）
      </div>
    </div>
  )
}
