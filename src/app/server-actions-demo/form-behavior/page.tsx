import { createInvoice, getInvoices } from './actions'
import InvoiceForm from './components/InvoiceForm'
import InvoiceList from './components/InvoiceList'
import Link from 'next/link'

export default async function FormBehaviorDemo() {
  // 在服務器端獲取發票列表
  const invoices = await getInvoices()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* 頁面標題和導航 */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Form Behavior Demo
          </h1>
          <Link
            href="/server-actions-demo"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 表單區域 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">創建新發票</h2>
            <InvoiceForm createInvoice={createInvoice} />
          </div>

          {/* 發票列表 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">發票列表</h2>
            <InvoiceList invoices={invoices} />
          </div>
        </div>

        {/* 功能說明 */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Server Actions 表單行為說明
          </h3>
          <div className="space-y-4 text-blue-800">
            <p>
              1. <strong>漸進式增強</strong>：即使 JavaScript 未加載或被禁用，
              表單仍然可以提交（在 Server Components 中）。
            </p>
            <p>
              2. <strong>智能排隊</strong>：在 Client Components 中，如果 JavaScript 
              還未加載完成，表單提交會進入隊列，等待客戶端水合完成後執行。
            </p>
            <p>
              3. <strong>無刷新提交</strong>：JavaScript 加載後，表單提交不會導致
              頁面刷新。
            </p>
            <p>
              4. <strong>靈活使用</strong>：Server Actions 不限於表單，還可以在
              事件處理器、useEffect 等地方使用。
            </p>
            <p>
              5. <strong>緩存整合</strong>：與 Next.js 的緩存和重新驗證架構
              完美整合。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
