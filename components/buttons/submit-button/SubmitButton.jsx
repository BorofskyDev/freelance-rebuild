import styles from './SubmitButton.module.scss'

export default function SubmitButton({type, disabled, className, children}){
    return (
      <button
        type={type}
        disabled={disabled}
        className={`border-2 bs-2 br-6 fw-bold fs-500 ${styles.submitButton} ${className}`}
      >
       {children}
      </button>
    )
}