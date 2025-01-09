'use client'

interface User {
  id: string
  name: string
  preferences: {
    theme: string
    notifications: boolean
    language: string
  }
}

interface Props {
  user: User
}

export default function UserProfile({ user }: Props) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>安全的用戶資料</h2>

      {/* 基本信息 */}
      <div className='space-y-2 mb-4'>
        <p><span className='font-medium'>ID:</span> {user.id}</p>
        <p><span className='font-medium'>姓名:</span> {user.name}</p>
      </div>

      {/* 偏好設置 */}
      <div className='mb-4'>
        <h3 className='font-medium mb-2'>偏好設置:</h3>
        <div className='space-y-1 pl-4'>
          <p>主題: {user.preferences.theme}</p>
          <p>通知: {user.preferences.notifications ? '開啟' : '關閉'}</p>
          <p>語言: {user.preferences.language}</p>
        </div>
      </div>
    </div>
  )
}
