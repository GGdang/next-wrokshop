import { getUserData, getSafeUserData } from './utils/user'
import UserProfile from './components/UserProfile'
import { experimental_taintUniqueValue } from 'react'

export default async function TaintDemo() {
  const userData = await getUserData()
  const safeData = getSafeUserData(userData)

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>數據保護示例</h1>

      <div className='space-y-8'>
        {/* 說明部分 */}
        <div className='bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>數據保護機制說明</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='font-medium mb-2'>1. 原始數據</h3>
              <p className='text-gray-700'>原始用戶數據包含敏感信息：</p>
              <pre className='bg-gray-50 p-4 rounded mt-2'>
                {`{
  id: 'user_123',
  name: 'John Doe',
  email: '...',
  address: '...',     // 敏感
  creditCard: '...',  // 敏感
  bankAccount: {...}  // 敏感
}`}
              </pre>
            </div>

            <div>
              <h3 className='font-medium mb-2'>2. 安全數據</h3>
              <p className='text-gray-700'>通過 getSafeUserData 函數過濾後的安全數據：</p>
              <pre className='bg-green-50 p-4 rounded mt-2'>
                {`{
  id: 'user_123',
  name: 'John Doe',
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'zh-TW'
  }
}`}
              </pre>
            </div>

            <div>
              <h3 className='font-medium mb-2'>3. 最佳實踐</h3>
              <ul className='list-disc list-inside space-y-2 text-gray-700'>
                <li>永遠不要將敏感數據傳遞給客戶端組件</li>
                <li>使用專門的函數來過濾和返回安全數據</li>
                <li>明確定義哪些數據是安全的</li>
                <li>在服務器端處理敏感數據</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 用戶資料展示 */}
        <div className='grid md:grid-cols-2 gap-6'>
          <UserProfile user={safeData} />
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>敏感數據（服務器端）</h2>
            <div className='space-y-2'>
              <p>
                <span className='font-medium'>電子郵件:</span> {('電子郵件不能傳遞到客戶端', userData, userData.email)}
              </p>
              <p>
                <span className='font-medium'>地址:</span>{' '}
                {experimental_taintUniqueValue('地址不能傳遞到客戶端', userData, userData.address)}
              </p>
              <p>
                <span className='font-medium'>信用卡:</span>{' '}
                {experimental_taintUniqueValue('信用卡信息不能傳遞到客戶端', userData, userData.creditCard)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
