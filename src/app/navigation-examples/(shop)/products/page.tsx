export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">商品列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div key={id} className="border rounded-lg p-4 shadow-sm">
            <div className="bg-gray-200 h-40 rounded-md mb-4"></div>
            <h2 className="text-lg font-semibold">商品 {id}</h2>
            <p className="text-gray-600">商品描述...</p>
          </div>
        ))}
      </div>
    </div>
  )
}
