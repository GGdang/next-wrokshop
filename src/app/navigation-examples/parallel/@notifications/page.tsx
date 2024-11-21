export default function NotificationsSlot() {
  const notifications = [
    {
      id: 1,
      title: '新任務指派',
      message: '你有一個新的專案任務待處理',
      time: '5分鐘前',
      type: 'task',
    },
    {
      id: 2,
      title: '系統更新',
      message: '系統將在今晚進行維護更新',
      time: '1小時前',
      type: 'system',
    },
    {
      id: 3,
      title: '會議提醒',
      message: '下午 3 點團隊週會',
      time: '2小時前',
      type: 'meeting',
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">通知中心</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 bg-gray-50 rounded-lg space-y-2"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{notification.title}</h3>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
