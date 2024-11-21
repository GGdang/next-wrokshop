export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">儀表板概覽</h2>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">今日統計</h3>
          <p className="text-blue-600">瀏覽量：1,234</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">本週統計</h3>
          <p className="text-green-600">完成任務：25</p>
        </div>
      </div>
    </div>
  )
}
