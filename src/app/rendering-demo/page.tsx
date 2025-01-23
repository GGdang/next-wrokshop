import { Suspense } from 'react'

// 模擬靜態數據
const staticData = {
  title: '靜態渲染示例',
  description: '這部分內容在構建時生成，適合不常變化的數據。',
}

// 模擬動態數據獲取
async function getDynamicData() {
  // 模擬 API 調用延遲
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    timestamp: new Date().toLocaleString('zh-TW'),
    randomNumber: Math.floor(Math.random() * 100),
  }
}

// 動態內容組件
async function DynamicContent() {
  const data = await getDynamicData()

  return (
    <div className='mt-6 bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h3 className='text-lg font-medium text-gray-900 mb-2'>動態內容</h3>
        <p className='text-gray-500 mb-4'>這部分內容在每次請求時動態生成：</p>
        <ul className='list-disc pl-5 space-y-2 text-gray-600'>
          <li>當前時間：{data.timestamp}</li>
          <li>隨機數字：{data.randomNumber}</li>
        </ul>
      </div>
    </div>
  )
}

export default function RenderingDemo() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>{staticData.title}</h2>
          <p className='text-gray-500 mb-4'>{staticData.description}</p>

          <div className='grid grid-cols-1 gap-4'>
            {/* 靜態內容 */}
            <div className='bg-white overflow-hidden shadow rounded-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>靜態內容</h3>
                <p className='text-gray-500 mb-4'>這部分內容在構建時生成，包括：</p>
                <ul className='list-disc pl-5 space-y-2 text-gray-600'>
                  <li>頁面布局和結構</li>
                  <li>靜態文本和描述</li>
                  <li>預設的樣式和配置</li>
                </ul>
              </div>
            </div>

            {/* 動態內容 */}
            <Suspense fallback={<div className='animate-pulse bg-gray-200 h-32 rounded-lg' />}>
              <DynamicContent />
            </Suspense>
          </div>

          <div className='mt-8'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>渲染策略說明：</h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>靜態渲染：頁面在構建時生成，適合靜態內容和不常變化的數據</li>
              <li>動態渲染：頁面在請求時生成，適合需要即時數據的內容</li>
              <li>流式渲染：使用 Suspense 實現漸進式加載，提升用戶體驗</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
