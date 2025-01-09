'use server'

interface Invoice {
  id: string
  customerId: string
  amount: number
  status: 'pending' | 'paid' | 'overdue'
  createdAt: string
}

// 模擬數據庫
let invoices: Invoice[] = [
  {
    id: '1',
    customerId: 'CUST001',
    amount: 1000,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
]

export async function createInvoice(formData: FormData) {
  // 模擬網絡延遲
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 從 FormData 獲取數據
  const rawFormData = Object.fromEntries(formData.entries())
  
  // 創建新發票
  const newInvoice: Invoice = {
    id: Math.random().toString(36).substr(2, 9),
    customerId: String(rawFormData.customerId),
    amount: Number(rawFormData.amount),
    status: String(rawFormData.status) as Invoice['status'],
    createdAt: new Date().toISOString()
  }

  // 驗證數據
  if (!newInvoice.customerId || !newInvoice.amount) {
    throw new Error('請填寫所有必填欄位')
  }

  // 模擬數據庫操作
  invoices.push(newInvoice)
  
  // 返回新創建的發票
  return newInvoice
}

export async function getInvoices() {
  // 模擬網絡延遲
  await new Promise(resolve => setTimeout(resolve, 500))
  return invoices
}
