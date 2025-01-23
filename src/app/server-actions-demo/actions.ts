'use server'

import { experimental_taintUniqueValue } from 'react'

// 所有在這個文件中的函數都是 Server Actions
export async function updateUser(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')

  // 在服務器端處理敏感數據
  const sensitiveData = {
    name,
    email,
    timestamp: new Date().toISOString(),
  }

  // 標記敏感數據
  experimental_taintUniqueValue('電子郵件不能傳遞到客戶端', sensitiveData, sensitiveData.email)

  // 返回安全的數據
  return {
    success: true,
    name: sensitiveData.name,
  }
}

export async function deleteUser(userId: string) {
  // 在服務器端執行刪除操作
  console.log('Deleting user:', userId)
  return { success: true }
}
