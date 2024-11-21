export default async function UserProfileDemo({ params }: { params: Promise<{ name: string[] }> }) {
  const resolvedParams = await params
  const nameSegments = resolvedParams.name

  // 模擬不同層級的用戶資料結構
  const profileTypes = {
    1: '基本資料',
    2: '詳細資料',
    3: '隱私設置',
    4: '其他設置',
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>用戶資料路徑示例</h1>

      <div className='space-y-4 mb-8'>
        <h2 className='text-xl font-semibold'>當前用戶路徑：</h2>
        <div className='space-y-2'>
          <p>
            完整路徑：
            <code className='bg-gray-100 px-2 py-1 rounded'>/user-profile/{nameSegments.join('/')}</code>
          </p>

          <div className='mt-4'>
            <h3 className='text-lg font-medium mb-2'>路徑分析：</h3>
            <ul className='list-disc pl-5 space-y-2'>
              {nameSegments.map((segment, index) => (
                <li key={index}>
                  <span className='font-medium'>{profileTypes[index + 1] || '自定義路徑'}：</span>
                  <span className='text-blue-600 ml-2'>{segment}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-6 p-4 bg-blue-50 rounded'>
            <h3 className='text-lg font-medium mb-2'>路徑結構說明：</h3>
            <ul className='list-none space-y-1 text-sm'>
              <li>• 第一段：用戶名稱</li>
              <li>• 第二段：資料類別（如：profile, settings）</li>
              <li>• 第三段：具體設置（如：privacy, notifications）</li>
              <li>• 更多段落：更深層的設置選項</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='p-4 bg-gray-100 rounded'>
        <p className='text-sm text-gray-600'>這個示例展示了如何使用 [...name] 來處理用戶資料的多層級路徑。 例如：</p>
        <ul className='mt-2 list-disc pl-5 text-sm text-gray-600'>
          <li>/user-profile/john（基本用戶頁面）</li>
          <li>/user-profile/john/settings（用戶設置頁面）</li>
          <li>/user-profile/john/settings/privacy（隱私設置頁面）</li>
        </ul>
      </div>
    </div>
  )
}
