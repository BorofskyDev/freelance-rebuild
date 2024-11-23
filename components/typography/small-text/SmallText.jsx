import styles from './SmallText.module.scss'

export default function SmallText({ children, className }) {
  return <p className={`fs-200 ${styles.smallText} ${className}`}>{children}</p>
}