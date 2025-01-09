import TaskList from './components/TaskList'
import Link from 'next/link'

export default function ClientActionsDemo() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* 頁面標題和導航 */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Client Actions Demo
          </h1>
          <Link
            href="/server-actions-demo"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回
          </Link>
        </div>

        {/* 主要內容區域 */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* 說明文字 */}
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              在 Client Component 中使用 Server Actions
            </h2>
            <p className="text-gray-600">
              這個示例展示了如何在客戶端組件中調用服務器端操作。
              所有的數據修改都在服務器端完成，確保了數據的一致性和安全性。
            </p>
          </div>

          {/* 任務列表組件 */}
          <TaskList />

          {/* 提示信息 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">實現細節</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    • 使用 useTransition 處理加載狀態
                    <br />
                    • Server Actions 處理所有數據操作
                    <br />
                    • 實時更新 UI 狀態
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
