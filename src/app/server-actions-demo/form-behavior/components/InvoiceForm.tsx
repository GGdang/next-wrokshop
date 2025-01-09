'use client'

import { useRef, useState, useTransition } from 'react'

interface InvoiceFormProps {
  createInvoice: (formData: FormData) => Promise<any>
}

export default function InvoiceForm({ createInvoice }: InvoiceFormProps) {
  const [error, setError] = useState<string>('')
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  // 處理表單提交
  async function handleSubmit(formData: FormData) {
    setError('')
    
    try {
      await createInvoice(formData)
      formRef.current?.reset() // 重置表單
    } catch (e) {
      setError(e instanceof Error ? e.message : '發生錯誤')
    }
  }

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        startTransition(async () => {
          await handleSubmit(formData)
        })
      }}
      className="space-y-4"
    >
      {/* 客戶 ID */}
      <div>
        <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">
          客戶 ID
        </label>
        <input
          type="text"
          id="customerId"
          name="customerId"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>

      {/* 金額 */}
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          金額
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>

      {/* 狀態 */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          狀態
        </label>
        <select
          id="status"
          name="status"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        >
          <option value="pending">待付款</option>
          <option value="paid">已付款</option>
          <option value="overdue">逾期</option>
        </select>
      </div>

      {/* 錯誤訊息 */}
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      {/* 提交按鈕 */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
      >
        {isPending ? '處理中...' : '創建發票'}
      </button>
    </form>
  )
}
