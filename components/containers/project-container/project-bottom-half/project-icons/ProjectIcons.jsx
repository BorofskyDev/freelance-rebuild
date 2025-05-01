import ProjectIcon from './project-icon/ProjectIcon'
import { icons as ICONS } from '@/components/icons/icons'
import styles from './ProjectIcons.module.scss'

export default function ProjectIcons({ icons = [], iconFill }) {
  const techIcons = icons.slice(0, 3)
  const decorativeIcon = icons[3]

  const positionClasses = [
    styles.topPosition,
    styles.rightPosition,
    styles.bottomPosition,
  ]

  return (
    <ul className={`${styles.projectIcons} ${styles.projectIcon}`}>
      {techIcons.map((iconKey, index) => {
        const { xmlns, viewBox, path } = ICONS[iconKey]
        return (
          <ProjectIcon
            key={iconKey}
            xmlns={xmlns}
            viewBox={viewBox}
            path={path}
            iconFill={iconFill}
            className={positionClasses[index]}
          />
        )
      })}

      {decorativeIcon && (
        <ProjectIcon
          xmlns={ICONS[decorativeIcon].xmlns}
          viewBox={ICONS[decorativeIcon].viewBox}
          path={ICONS[decorativeIcon].path}
          ariaLabel={ICONS[decorativeIcon].ariaLabel}
          iconFill={iconFill}
          className={styles.leftPosition}
        />
      )}
    </ul>
  )
}
