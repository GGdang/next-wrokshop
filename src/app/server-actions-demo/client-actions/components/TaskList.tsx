'use client'

import { useState, useTransition, useEffect } from 'react'
import { createTask, deleteTask, toggleTask, getTasks } from '../actions'

export default function TaskList() {
  const [tasks, setTasks] = useState<Awaited<ReturnType<typeof getTasks>>>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [isPending, startTransition] = useTransition()
  
  // 載入任務列表
  const loadTasks = () => {
    startTransition(async () => {
      const loadedTasks = await getTasks()
      setTasks(loadedTasks)
    })
  }
  
  // 創建新任務
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskTitle.trim()) return
    
    startTransition(async () => {
      await createTask(newTaskTitle)
      setNewTaskTitle('')
      loadTasks()
    })
  }
  
  // 切換任務狀態
  const handleToggle = (id: string) => {
    startTransition(async () => {
      await toggleTask(id)
      loadTasks()
    })
  }
  
  // 刪除任務
  const handleDelete = (id: string) => {
    startTransition(async () => {
      await deleteTask(id)
      loadTasks()
    })
  }
  
  // 使用 useEffect 進行初始載入
  useEffect(() => {
    loadTasks()
  }, []) // 空依賴數組表示只在組件掛載時執行一次
  
  return (
    <div className="space-y-4">
      {/* 新增任務表單 */}
      <form onSubmit={handleCreate} className="flex gap-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="輸入新任務..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isPending ? '新增中...' : '新增任務'}
        </button>
      </form>

      {/* 任務列表 */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                disabled={isPending}
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => handleDelete(task.id)}
              disabled={isPending}
              className="text-red-500 hover:text-red-600 disabled:text-red-300"
            >
              刪除
            </button>
          </div>
        ))}
      </div>

      {/* 載入中狀態 */}
      {isPending && (
        <div className="text-center text-gray-500">處理中...</div>
      )}
    </div>
  )
}
