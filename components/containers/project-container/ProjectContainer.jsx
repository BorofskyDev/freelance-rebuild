import ProjectBottomHalf from './project-bottom-half/ProjectBottomHalf'
import ProjectTopHalf from './project-top-half/ProjectTopHalf'
import styles from './ProjectContainer.module.scss'

export default function ProjectContainer({
  title,
  src,
  alt,
  blogHref,
  liveSiteHref,
  icons = [],
  iconFill,
  className
}) {
  return (

    <div className={`border-4 bs-4 ${styles.projectContainer} ${className}`}>
      <ProjectTopHalf title={title} src={src} alt={alt} />
      <ProjectBottomHalf
        blogHref={blogHref}
        liveSiteHref={liveSiteHref}
        icons={icons}
        iconFill={iconFill}
      />
    </div>
  )
}
