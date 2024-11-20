import RenderTime from './components/RenderTime'
import styles from './styles/animations.module.scss'

export default function LayoutTestTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`relative ${styles.container}`}>
        {/* 使用 Client Component 來顯示時間 */}
        <RenderTime />

        {/* 每次路由變化都會重新播放的動畫 */}
        <div className={`transition-all duration-500 ease-in-out ${styles.fadeIn}`}>{children}</div>
      </div>
      <div>
        {/* 使用最外層的 .title */}
        <h1 className={styles.title}>最外層的標題</h1>

        {/* 使用 .container 內的 .title */}
        <div className={styles.container}>
          <h2 className={styles.title}>容器內的標題</h2>

          {/* 使用 .container .content 內的 .title */}
          <div className={styles.content}>
            <h3 className={styles.title}>內容區塊中的標題</h3>
          </div>
        </div>

        {/* 使用最外層 .content 內的 .title */}
        <div className={styles.content}>
          <h3 className={styles.title}>獨立內容區的標題</h3>
        </div>
      </div>
    </div>
  )
}
