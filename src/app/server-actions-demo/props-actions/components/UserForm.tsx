'use client'

import { useTransition } from 'react'

interface UserFormProps {
  // 注意：props 名稱以 Action 結尾，這樣 TypeScript 就知道這是一個 Server Action
  updateUserAction: (formData: FormData) => Promise<any>
  initialData: {
    name: string
    email: string
    role: string
  }
}

export default function UserForm({ updateUserAction, initialData }: UserFormProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <form
      action={updateUserAction}
      className="space-y-4"
    >
      {/* 姓名欄位 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          姓名
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={initialData.name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>

      {/* 電子郵件欄位 */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          電子郵件
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={initialData.email}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>

      {/* 角色選擇 */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          角色
        </label>
        <select
          id="role"
          name="role"
          defaultValue={initialData.role}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isPending}
        >
          <option value="user">一般用戶</option>
          <option value="admin">管理員</option>
          <option value="editor">編輯者</option>
        </select>
      </div>

      {/* 提交按鈕 */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
      >
        {isPending ? '更新中...' : '更新用戶資料'}
      </button>
    </form>
  )
}
