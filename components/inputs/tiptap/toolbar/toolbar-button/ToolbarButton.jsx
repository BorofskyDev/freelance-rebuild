import styles from './ToolbarButton.module.scss'

export default function ToolbarButton({
  onClick,
  isActive = false,
  children,
  ariaLabel,
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${styles.toolbarButton} ${isActive ? styles.active : ''}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
