import { Suspense } from 'react'

export default function Loading() {
  return (
    <Suspense>
      <div className="p-4 text-center">
        <h3 className="text-blue-500 text-2xl">
          Root Loading (app/loading.tsx)
        </h3>
      </div>
    </Suspense>
  )
}
