import Image from 'next/image'
import styles from './ImageContainer.module.scss'

export default function JpgImage({ src, alt }) {
  if (!src) return null

  return (
    <Image
      src={src}
      alt={alt || 'Image'}
      className={`border-4 br-6 bs-3 ${styles.image}`}
      height={1080}
      width={1260}
    />
  )
}
