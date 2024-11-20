// 這是一個 Server Component（默認）
import ClientComponent from './client-component'
import ServerComponent from './server-component'

// 模擬數據庫數據
const getDatabaseData = () => {
  return {
    user: 'John Doe',
    role: 'Admin',
    lastLogin: new Date().toISOString(),
    // 添加一個隨機數來證明每次都是新的數據
    requestId: Math.random().toString(36).substring(7)
  }
}

export default async function RenderTestPage() {
  // 1. 在服務器端獲取數據
  const data = getDatabaseData()
  
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Server vs Client Rendering 示例</h1>
      
      {/* 1. Server Component */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">1. Server Component:</h2>
        <div className="text-sm text-blue-500 mb-2">
          Request ID: {data.requestId} （每次進入頁面都會不同）
        </div>
        <ServerComponent data={data} />
      </div>

      {/* 2. Client Component */}
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">2. Client Component:</h2>
        <ClientComponent initialData={data} />
      </div>

      {/* 3. 渲染時間證明 */}
      <div className="text-sm text-gray-500">
        頁面渲染時間: {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}
