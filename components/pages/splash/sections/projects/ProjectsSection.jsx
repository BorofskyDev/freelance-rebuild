import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import ProjectContainer from '@/components/containers/project-container/ProjectContainer'
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
