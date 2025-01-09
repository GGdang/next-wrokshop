'use client'

interface Invoice {
  id: string
  customerId: string
  amount: number
  status: string
  createdAt: string
}

interface InvoiceListProps {
  invoices: Invoice[]
}

export default function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <div className="overflow-hidden">
      <div className="flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <li key={invoice.id} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    客戶 ID: {invoice.customerId}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    金額: ${invoice.amount}
                  </p>
                  <p className="text-sm text-gray-500">
                    建立時間: {new Date(invoice.createdAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      invoice.status === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : invoice.status === 'overdue'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {invoice.status === 'paid'
                      ? '已付款'
                      : invoice.status === 'overdue'
                      ? '逾期'
                      : '待付款'}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
