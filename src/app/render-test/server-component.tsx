// Server Component（默認）
export default function ServerComponent({ 
  data 
}: { 
  data: { user: string; role: string; lastLogin: string } 
}) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">特點：</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>在服務器端渲染</li>
          <li>減少客戶端 JavaScript 體積</li>
          <li>直接訪問後端資源</li>
          <li>更好的 SEO</li>
          <li>更快的首次加載</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded">
        <h3 className="font-bold mb-2">數據展示：</h3>
        <div className="space-y-2">
          <p>用戶: {data.user}</p>
          <p>角色: {data.role}</p>
          <p>最後登入: {new Date(data.lastLogin).toLocaleString()}</p>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        服務器渲染時間: {new Date().toLocaleTimeString()}
      </div>
    </div>
  )
}
