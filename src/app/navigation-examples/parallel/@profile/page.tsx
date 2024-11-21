export default function ProfileSlot() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">用戶資料</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-gray-500">軟體工程師</p>
          </div>
        </div>
        <div className="pt-4 border-t">
          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-gray-500">電子郵件：</span>
              <span>john@example.com</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-500">位置：</span>
              <span>台北市</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-500">加入時間：</span>
              <span>2023年</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
