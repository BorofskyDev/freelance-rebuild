import styles from './PageContainer.module.scss'

export default function PageContainer({className, children}) {
    return ( 
        <main className={`${styles.pageContainer} ${className}`}>{children}</main>
    )
}