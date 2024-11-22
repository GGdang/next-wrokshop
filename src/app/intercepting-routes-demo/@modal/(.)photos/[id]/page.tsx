'use client'

import { useRouter } from 'next/navigation'

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
            <div>
              <div className='aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg'>
                <div className='flex items-center justify-center'>
                  <p className='text-gray-500'>照片 {params.id} 的模態框視圖</p>
                </div>
              </div>
              <div className='mt-3 text-center sm:mt-5'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  照片 {params.id}
                </h3>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    這是一個使用路由攔截實現的模態框。點擊背景或關閉按鈕可以返回。
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-5 sm:mt-6'>
              <button
                type='button'
                className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={() => router.back()}
              >
                關閉模態框
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
