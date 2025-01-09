'use server'

// 用戶資料類型
interface UserData {
  name: string
  email: string
  role: string
}

// 模擬用戶數據
let userData: UserData = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user'
}

// Server Action：更新用戶資料
export async function updateUserAction(formData: FormData) {
  // 模擬延遲
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 更新用戶數據
  userData = {
    name: formData.get('name') as string || userData.name,
    email: formData.get('email') as string || userData.email,
    role: formData.get('role') as string || userData.role
  }
  
  return userData
}

// Server Action：獲取用戶資料
export async function getUserAction() {
  await new Promise(resolve => setTimeout(resolve, 500))
  return userData
}
