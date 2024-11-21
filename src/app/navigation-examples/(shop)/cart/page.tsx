export default function CartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">購物車</h1>
      <div className="border rounded-lg divide-y">
        {[1, 2].map((id) => (
          <div key={id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 w-16 h-16 rounded-md"></div>
              <div>
                <h2 className="font-semibold">商品 {id}</h2>
                <p className="text-gray-600">數量：1</p>
              </div>
            </div>
            <div className="text-lg font-semibold">
              NT$ {id}00
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
