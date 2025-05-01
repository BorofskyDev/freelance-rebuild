import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import ProjectContainer from '@/components/containers/project-container/ProjectContainer'
import { icons as ICONS } from '@/components/icons/icons'
import rfProjectImg from '@/public/img/projects/rf.png'
import nawaProjectImg from '@/public/img/projects/nawa.png'
import momentsToMemoriesProjectImg from '@/public/img/projects/moments-to-memories.png'
import criminalRollsProjectImg from '@/public/img/projects/criminal-rolls.png'
import escapeFromEdenImg from '@/public/img/projects/escape.png'
import styles from './ProjectsSection.module.scss'
import { projects } from './projects'

export default function ProjectsSection() {
  return (
    <section id='projects' className={styles.projectsSection}>
      <SectionHeader className='bg-red'>Projects</SectionHeader>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectContainer
            key={project.id}
            className={project.colorTheme}
            title={project.title}
            src={project.image.src}
            alt={project.image.alt}
            blogHref={project.links.blog}
            liveSiteHref={project.links.liveSite}
            icons={[...project.techStack, project.decorativeIcon]}
            iconFill={`hsl(var(--color-${project.colorTheme.slice(3)}))`}
          />
        ))}
      </div>
    </section>
  )
}
