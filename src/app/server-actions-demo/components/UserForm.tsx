'use client'

import { useTransition } from 'react'
import { updateUser, deleteUser } from '../actions'

export default function UserForm() {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteUser('123')
      if (result.success) {
        console.log('User deleted')
      }
    })
  }

  return (
    <div className="space-y-4">
      <form action={updateUser} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </div>
        
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isPending ? 'Updating...' : 'Update User'}
        </button>
      </form>

      <button
        onClick={handleDelete}
        disabled={isPending}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-red-300"
      >
        {isPending ? 'Deleting...' : 'Delete User'}
      </button>
    </div>
  )
}
