export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: '商品 A',
      price: '$99',
      description: '這是商品 A 的描述',
    },
    {
      id: 2,
      name: '商品 B',
      price: '$199',
      description: '這是商品 B 的描述',
    },
    {
      id: 3,
      name: '商品 C',
      price: '$299',
      description: '這是商品 C 的描述',
    },
  ]

  return (
    <div className='space-y-8'>
      <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            商品列表
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            使用 Shop 布局的頁面
          </p>
        </div>

        <div className='border-t border-gray-200'>
          <div className='bg-gray-50 px-4 py-5 sm:p-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='bg-white overflow-hidden shadow rounded-lg'
                >
                  <div className='px-4 py-5 sm:p-6'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      {product.name}
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.description}
                    </p>
                    <p className='mt-2 text-lg font-medium text-green-600'>
                      {product.price}
                    </p>
                    <button className='mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                      加入購物車
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-gray-50 px-4 py-5 sm:p-6 border-t border-gray-200'>
          <h4 className='text-sm font-medium text-gray-500 mb-4'>
            Route Group 說明
          </h4>
          <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <dt className='text-sm font-medium text-gray-500'>Route Group</dt>
              <dd className='mt-1 text-sm text-gray-900'>(shop)</dd>
            </div>
            <div>
              <dt className='text-sm font-medium text-gray-500'>URL 路徑</dt>
              <dd className='mt-1 text-sm text-gray-900'>/products</dd>
            </div>
            <div>
              <dt className='text-sm font-medium text-gray-500'>布局特點</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                使用綠色系漸變背景的導航欄，包含商店相關連結
              </dd>
            </div>
            <div>
              <dt className='text-sm font-medium text-gray-500'>說明</dt>
              <dd className='mt-1 text-sm text-gray-900'>
                此頁面位於 (shop) 資料夾中，使用商店專用的布局
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
