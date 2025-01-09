'use server'

// 模擬任務數據類型
interface Task {
  id: string
  title: string
  completed: boolean
}

// 模擬數據庫
let tasks: Task[] = [
  { id: '1', title: '學習 Next.js', completed: false },
  { id: '2', title: '實作 Server Actions', completed: false },
]

// Server Actions
export async function createTask(title: string) {
  // 模擬數據庫延遲
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newTask: Task = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    completed: false
  }
  
  tasks.push(newTask)
  return newTask
}

export async function toggleTask(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const task = tasks.find(t => t.id === id)
  if (task) {
    task.completed = !task.completed
    return task
  }
  return null
}

export async function deleteTask(id: string) {
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const index = tasks.findIndex(t => t.id === id)
  if (index !== -1) {
    tasks = tasks.filter(t => t.id !== id)
    return true
  }
  return false
}

export async function getTasks() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return tasks
}
