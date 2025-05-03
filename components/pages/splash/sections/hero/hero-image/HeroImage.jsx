import ImageContainer from '@/components/containers/image-container/ImageContainer'
import heroPicture from '@/public/img/profile/joel-kid-cutout.png'
import { icons } from '@/components/icons/icons'
import styles from './HeroImage.module.scss'

export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <ImageContainer
        image={{
          src: heroPicture,
          alt: 'Joel Borofsky elementary school photo',
          wrapperClass: 'bg-blue',
          imageClass: 'bg-green',
        }}
        title={{
          text: 'Joel Borofsky',
          containerBg: 'bg-orange',
        }}
        note='a wee lad'
        icons={[
          {
            className: 'bg-vibrant-purple',
            fill: 'fill-vibrant-red',
            icon: icons.astronaut.path,
            xmlns: icons.astronaut.xmlns,
            viewBox: icons.astronaut.viewBox,
          },
          {
            className: 'bg-yellow',
            fill: 'fill-vibrant-blue',
            icon: icons.sunflower.path,
            xmlns: icons.sunflower.xmlns,
            viewBox: icons.sunflower.viewBox,
          },
        ]}
        className={` ${styles.imageContainer}`}
      />
    </div>
  )
}
