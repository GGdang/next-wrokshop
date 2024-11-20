'use server'

// 模擬文章創建
export async function createArticle(prevState: any, formData: FormData) {
  try {
    // 模擬 API 調用
    const title = formData.get('title')
    if (!title || typeof title !== 'string') {
      return {
        error: '標題是必需的'
      }
    }

    // 模擬一個隨機失敗
    if (Math.random() > 0.5) {
      throw new Error('服務器錯誤')
    }

    // 成功情況
    return {
      success: true,
      message: '文章創建成功'
    }
  } catch (error) {
    // 這裡的錯誤會被正確處理，不會觸發 error.tsx
    return {
      error: error instanceof Error ? error.message : '未知錯誤'
    }
  }
}
