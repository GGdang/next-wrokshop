export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      {/* 這個時間戳會在每次路由變化時更新 */}
      <div className="absolute top-0 right-0 m-4 text-sm text-gray-500">
        訪問時間: {new Date().toLocaleTimeString()}
      </div>
      
      {/* 每次路由變化都會重新播放的淡入動畫 */}
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  )
}
