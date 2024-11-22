export default function AboutPage() {
  return (
    <div className='space-y-8'>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            關於我們
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            這是一個使用行銷頁面布局的示例頁面
          </p>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                路由群組
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                (marketing)
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                網址路徑
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                /about
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                布局特色
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                使用紫色系漸變背景的導航欄，包含行銷相關的連結
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>
                路由群組說明
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                雖然此頁面位於 (marketing) 資料夾中，但實際的網址路徑是 /about。
                這就是路由群組的特色：可以組織程式碼結構，但不影響 URL。
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            路由群組的優點
          </h3>
        </div>
        <div className='border-t border-gray-200'>
          <div className='px-4 py-5 sm:p-6'>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>可以根據功能或團隊來組織檔案結構</li>
              <li>不同群組可以使用不同的布局設計</li>
              <li>保持簡潔的 URL 結構</li>
              <li>提高程式碼的可維護性</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
