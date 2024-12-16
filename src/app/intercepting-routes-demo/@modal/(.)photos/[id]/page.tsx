'use client'

import { useParams } from 'next/navigation'
import Modal from '@/app/components/Modal'

export default function PhotoModal() {
  const params = useParams()

  return (
    <Modal>
      <div className='p-6'>
        <div className='aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4'>
          <div className='flex items-center justify-center'>
            <p className='text-gray-500'>照片 {params.id} 的模態框視圖</p>
          </div>
        </div>
        
        <div className='text-center'>
          <h3 className='text-lg font-medium leading-6 text-gray-900 mb-2'>
            照片 {params.id}
          </h3>
          <p className='text-sm text-gray-500 mb-4'>
            這是一個使用路由攔截實現的模態框。點擊背景或關閉按鈕可以返回。
          </p>
          
          <button
            type='button'
            className='inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={() => window.history.back()}
          >
            關閉模態框
          </button>
        </div>
      </div>
    </Modal>
  )
}
