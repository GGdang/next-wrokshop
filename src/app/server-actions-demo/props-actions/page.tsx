import UserForm from './components/UserForm'
import { updateUserAction, getUserAction } from './actions'
import Link from 'next/link'

export default async function PropsActionsDemo() {
  // 在服務器端獲取初始數據
  const initialData = await getUserAction()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* 頁面標題和導航 */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Props Actions Demo
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
              將 Server Actions 作為 Props 傳遞
            </h2>
            <p className="text-gray-600">
              這個示例展示了如何將 Server Actions 作為 props 傳遞給 Client Components。
              注意 props 名稱以 Action 結尾，這樣 TypeScript 就知道這是一個 Server Action。
            </p>
          </div>

          {/* 表單區域 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              用戶資料表單
            </h3>
            <UserForm
              updateUserAction={updateUserAction}
              initialData={initialData}
            />
          </div>

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
                    • Server Action 通過 props 傳遞給客戶端組件
                    <br />
                    • Props 名稱以 Action 結尾以支持 TypeScript
                    <br />
                    • 使用 useTransition 處理加載狀態
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
