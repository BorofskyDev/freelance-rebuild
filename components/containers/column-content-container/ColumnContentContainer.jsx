import styles from './ColumnContentContainer.module.scss';


export default function ColumnContentContainer({ className, children }) {
  return (
    <div className={`${styles.content} ${className}`}>
      {children}
    </div>
  )
}