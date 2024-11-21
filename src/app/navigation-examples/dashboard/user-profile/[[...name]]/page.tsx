export default async function DashboardUserProfileDemo({
  params,
}: {
  params: Promise<{ name?: string[] }>
}) {
  const resolvedParams = await params
  const nameSegments = resolvedParams.name || [] // 使用空數組作為默認值，因為是可選的

  // 模擬不同層級的用戶資料結構
  const profileTypes = {
    1: '基本資料',
    2: '詳細資料',
    3: '隱私設置',
    4: '其他設置',
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>儀表板用戶資料路徑示例</h1>

      <div className='space-y-4 mb-8'>
        <h2 className='text-xl font-semibold'>當前用戶路徑：</h2>
        <div className='space-y-2'>
          <p>
            完整路徑：
            <code className='bg-gray-100 px-2 py-1 rounded'>
              /dashboard/user-profile{nameSegments.length > 0 ? '/' + nameSegments.join('/') : ''}
            </code>
          </p>

          {nameSegments.length > 0 ? (
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
          ) : (
            <div className='mt-4 p-4 bg-yellow-50 rounded'>
              <p className='text-yellow-700'>
                當前在根路徑 /dashboard/user-profile
              </p>
            </div>
          )}

          <div className='mt-6 p-4 bg-blue-50 rounded'>
            <h3 className='text-lg font-medium mb-2'>路徑結構說明：</h3>
            <ul className='list-none space-y-1 text-sm'>
              <li>• 可以訪問根路徑：/dashboard/user-profile</li>
              <li>• 第一段：用戶名稱（可選）</li>
              <li>• 第二段：資料類別（可選，如：profile, settings）</li>
              <li>• 第三段：具體設置（可選，如：privacy, notifications）</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='p-4 bg-gray-100 rounded'>
        <p className='text-sm text-gray-600'>
          這個示例展示了如何使用 [[...name]] 來處理可選的用戶資料多層級路徑。
          注意使用雙層中括號，表示所有路徑段落都是可選的。
        </p>
        <ul className='mt-2 list-disc pl-5 text-sm text-gray-600'>
          <li>/dashboard/user-profile（根路徑，合法）</li>
          <li>/dashboard/user-profile/john（單層路徑）</li>
          <li>/dashboard/user-profile/john/settings（雙層路徑）</li>
          <li>/dashboard/user-profile/john/settings/privacy（三層路徑）</li>
        </ul>
      </div>
    </div>
  )
}
