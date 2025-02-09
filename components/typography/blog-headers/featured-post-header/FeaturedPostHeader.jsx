import styles from './FeaturedPostHeader.module.scss'

export default function FeaturedPostHeader({ children, className }) {
  return <h2 className={`bg-light border-2 bs-2 br-4 fw-black ${styles.featuredPostHeader} ${className}`}>{children}</h2>
}
