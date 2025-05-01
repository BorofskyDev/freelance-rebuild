import styles from './DownloadButton.module.scss';

export default function DownloadButton({path, title, className}) {
    return (
      <a href={path} download className={`${styles.downloadButton} ${className}`}>
        {title}
        <span className={styles.downloadButton__fileType}>Downloads in PDF</span>
      </a>
    )
}