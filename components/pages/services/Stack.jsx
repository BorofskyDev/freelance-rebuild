import { icons } from '@/components/icons/icons'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'

export function Stack() {
  return (
    <SmallServiceContainer
      className='bg-yellow'
      icon={icons.stack.path}
      viewBox={icons.stack.viewBox}
      xmlns={icons.stack.xmlns}
      iconFill='fill-vibrant-red'
      iconClassName='bg-violet'
      headerText='Stack'
      headerClassName='bg-red'
    >
      <p className='border-2 br-5 bs-2'>
        This isn&apos;t the limits of my stack, but pretty much the primary tech
        that will find its way to almost every build.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        Frontend Tech (what you see): HTML, CSS, JavaScript, React, Next.js
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        Backend Tech (what you don&apos;t see): Node.js, Firebase, SQL, Prisma
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        Design Tech (how it looks): Figma, SASS/SCSS, TailwindCSS, Framer
        Motion, Headless UI
      </p>
      <br />
      <br />

      <p className='border-2 br-5 bs-2'>
        Business Background (how I help): Business development, marketing,
        sales, client relations, stakeholder relations, start-up experience, and
        commercial credit.
      </p>
      
    </SmallServiceContainer>
  )
}
