import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import ProjectContainer from '@/components/containers/project-container/ProjectContainer'
import { icons } from '@/components/icons/icons'
import freelanceSiteProjectImg from '@/public/img/projects/freelance-site.png'
import rfProjectImg from '@/public/img/projects/rf.png'
import nawaProjectImg from '@/public/img/projects/nawa.png'
import momentsToMemoriesProjectImg from '@/public/img/projects/moments-to-memories.png'
import criminalRollsProjectImg from '@/public/img/projects/criminal-rolls.png'
import escapeFromEdenImg from '@/public/img/projects/escape.png'
import styles from './ProjectsSection.module.scss'

export default function ProjectsSection() {
  return (
    <section id='projects' className={styles.projectsSection}>
      <SectionHeader className='bg-red'>Projects</SectionHeader>
      <div className={styles.projectsContainer}>
        <ProjectContainer
          className='bg-vibrant-blue'
          title='This Site!'
          src={freelanceSiteProjectImg}
          alt='intro section of this website'
          blogHref='/blog/how-to-design-a-gaudy-profile-site'
          liveSiteHref='/'
          techIcon1={icons.nextjs.path}
          xmlns1={icons.nextjs.xmlns}
          viewBox1={icons.nextjs.viewBox}
          techIcon2={icons.sass.path}
          xmlns2={icons.sass.xmlns}
          viewBox2={icons.sass.viewBox}
          techIcon3={icons.firebase.path}
          xmlns3={icons.firebase.xmlns}
          viewBox3={icons.firebase.viewBox}
          decorativeIcon={icons.cat.path}
          xmlns4={icons.cat.xmlns}
          viewBox4={icons.cat.viewBox}
          iconFill='fill-vibrant-blue'
        />

        <ProjectContainer
          className='bg-vibrant-red'
          title='Rebekah Fowler Profile'
          alt='Rebekah Fowler Profile'
          src={rfProjectImg}
          blogHref='/blog/designing-a-basic-portfolio-site'
          liveSiteHref='https://rebekahfowler.com/'
          techIcon1={icons.nextjs.path}
          xmlns1={icons.nextjs.xmlns}
          viewBox1={icons.nextjs.viewBox}
          techIcon2={icons.sass.path}
          xmlns2={icons.sass.xmlns}
          viewBox2={icons.sass.viewBox}
          techIcon3={icons.framerMotion.path}
          xmlns3={icons.framerMotion.xmlns}
          viewBox3={icons.framerMotion.viewBox}
          decorativeIcon={icons.profile.path}
          xmlns4={icons.profile.xmlns}
          viewBox4={icons.profile.viewBox}
          iconFill='fill-vibrant-red'
        />

        <ProjectContainer
          className='bg-vibrant-green'
          title='Escape From Eden Blog'
          alt='Escape from eden blog'
          src={escapeFromEdenImg}
          blogHref='/blog/escape-from-neubrutalism'
          liveSiteHref='https://escape-from-eden-sql.vercel.app/'
          techIcon1={icons.nextjs.path}
          xmlns1={icons.nextjs.xmlns}
          viewBox1={icons.nextjs.viewBox}
          techIcon2={icons.tailwind.path}
          xmlns2={icons.tailwind.xmlns}
          viewBox2={icons.tailwind.viewBox}
          techIcon3={icons.postgres.path}
          xmlns3={icons.postgres.xmlns}
          viewBox3={icons.postgres.viewBox}
          decorativeIcon={icons.bittenApple.path}
          xmlns4={icons.bittenApple.xmlns}
          viewBox4={icons.bittenApple.viewBox}
          iconFill='fill-vibrant-green'
        />

        {/*   */}
        {/*    
   <ProjectContainer
    className='bg-vibrant-pink'
    title='Moments to Memories'
    alt='moments to memories splash page'
    src={momentsToMemoriesProjectImg}
    blogHref='/'
    liveSiteHref='/'
    techIcon1={icons.nextjs.path}
    xmlns1={icons.nextjs.xmlns}
    viewBox1={icons.nextjs.viewBox}
    techIcon2={icons.sass.path}
    xmlns2={icons.sass.xmlns}
    viewBox2={icons.sass.viewBox}
    techIcon3={icons.firebase.path}
    xmlns3={icons.firebase.xmlns}
    viewBox3={icons.firebase.viewBox}
    decorativeIcon={icons.camera.path}
    xmlns4={icons.camera.xmlns}
    viewBox4={icons.camera.viewBox}
    iconFill='fill-vibrant-pink'
   />
    */}
        <ProjectContainer
          className='bg-pink'
          title='Criminal Rolls'
          alt='criminal rolls splash page'
          src={criminalRollsProjectImg}
          blogHref='/blog/arresting-the-criminal-rolls-design'
          liveSiteHref='https://criminal-rolls-dev.vercel.app/'
          techIcon1={icons.nextjs.path}
          xmlns1={icons.nextjs.xmlns}
          viewBox1={icons.nextjs.viewBox}
          techIcon2={icons.tailwind.path}
          xmlns2={icons.tailwind.xmlns}
          viewBox2={icons.tailwind.viewBox}
          techIcon3={icons.firebase.path}
          xmlns3={icons.firebase.xmlns}
          viewBox3={icons.firebase.viewBox}
          decorativeIcon={icons.cinnamonRoll.path}
          xmlns4={icons.cinnamonRoll.xmlns}
          viewBox4={icons.cinnamonRoll.viewBox}
          iconFill='fill-pink'
        />
      </div>
      {/* <InternalLinkBox href='/projects'>View More Projects!</InternalLinkBox> */}
    </section>
  )
}
