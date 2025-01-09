import { experimental_taintUniqueValue } from 'react'

// 模擬數據庫查詢
async function queryUserFromDB() {
  // 模擬數據庫延遲
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    id: 'user_123',
    name: 'John Doe',
    email: 'john@example.com',
    address: '台北市信義區信義路五段7號',
    creditCard: '4242-4242-4242-4242',
    bankAccount: {
      accountNumber: '1234567890',
      bank: '台灣銀行',
      branch: '信義分行',
    },
    preferences: {
      theme: 'dark',
      notifications: true,
      language: 'zh-TW',
    },
  }
}

export async function getUserData() {
  const data = await queryUserFromDB()

  // 標記敏感字段，不包括對象
  experimental_taintUniqueValue('信用卡信息不能傳遞到客戶端', data, data.creditCard)

  experimental_taintUniqueValue('地址信息不能傳遞到客戶端', data, data.address)

  experimental_taintUniqueValue('電子郵件不能傳遞到客戶端', data, data.email)

  return {
    ...data,
    // 移除敏感的銀行帳戶信息
    bankAccount: undefined,
  }
}

// 安全的數據獲取函數
export function getSafeUserData(data: Awaited<ReturnType<typeof getUserData>>) {
  return {
    id: data.id,
    name: data.name,
    preferences: data.preferences,
  }
}

// 獲取用戶偏好設置
export function getUserPreferences(data: Awaited<ReturnType<typeof getUserData>>) {
  return data.preferences
}
