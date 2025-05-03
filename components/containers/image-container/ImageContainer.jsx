import JpgImage from './JpgImage'
import SmallTitleContainer from '../title-containers/small-title-container/SmallTitleContainer'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './ImageContainer.module.scss'

export default function ImageContainer({
  image,
  title,
  note,
  icons = [],
  className = '',
}) {
  const { src, alt, wrapperClass, imageClass = '' } = image || {}

  const titleText = title?.text || ''
  const titleContainerBg = title?.containerBg || ''

  return (
    <div
      className={`relative border-4 br-6 bs-4 ${styles.imageContainer} ${wrapperClass} ${className}`}
    >
      {src && (
        <div className={imageClass}>
          <JpgImage
            src={src}
            alt={alt || 'Image'}
            className={`border-4 br-6 bs-3 ${styles.image}`}
          />
        </div>
      )}

      {titleText && (
        <SmallTitleContainer className={titleContainerBg}>
          {titleText} {note && <span className='font-handwriting'>{note}</span>}
        </SmallTitleContainer>
      )}

      {icons.map((iconProps, index) => (
        <SmallIcon
          key={`image-icon-${index}`}
          {...iconProps}
          position={index === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  )
}
