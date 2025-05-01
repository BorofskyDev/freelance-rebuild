import ProjectIcons from './project-icons/ProjectIcons'
import ProjectLinks from './project-links/ProjectLinks'
import styles from './ProjectBottomHalf.module.scss'

export default function ProjectBottomHalf({
  blogHref,
  liveSiteHref,
  icons = [],
  iconFill,
}) {
  return (
    <div className={styles.projectBottomHalf}>
      <ProjectLinks blogHref={blogHref} liveSiteHref={liveSiteHref} />
      <ProjectIcons
        icons={icons}
        iconFill={iconFill}
      />
    </div>
  )
}
