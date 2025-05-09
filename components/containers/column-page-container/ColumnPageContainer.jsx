
import styles from './ColumnPageContainer.module.scss'

export default function AccessibilityPage({ bgColor, children}) {
  return (
    <main id='main' className={`${bgColor} ${styles.columnPageContainer}`}>
      {children}
    </main>
  )
}
