import ImageContainer from '@/components/containers/image-container/ImageContainer'
import { icons } from '@/components/icons/icons'
import sunsetPhoto from '@/public/img/profile/joel-laying-cutout.png'
import LargeServiceContainer from '@/components/containers/service-containers/large-service-container/LargeServiceContainer'
import styles from './AboutModals.module.scss'

export function CVAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        image={{
          src: sunsetPhoto,
          alt: 'Joel Borofsky laying down in the sunset on his back',
          wrapperClass: 'bg-red',
          imageClass: 'bg-vibrant-pink',
        }}
        title={{
          text: 'Joel Borofsky',
          containerBg: 'bg-blue',
        }}
        note='my foot!'
        icons={[
          {
            className: 'bg-violet',
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
      />

      <LargeServiceContainer
        className={`bg-red ${styles.contentContainer}`}
        icon={icons.dinosaur.path}
        viewBox={icons.dinosaur.viewBox}
        xmlns={icons.dinosaur.xmlns}
        fill='fill-vibrant-purple'
        iconClassName='bg-green'
        headerText='My CV'
        headerClassName='bg-yellow'
      >
        <p className='border-2 br-5 bs-2'>
          I began my professional life in financial services—joining Wells Fargo
          in 2013 as a customer service representative in Raleigh, NC. Over six
          years I advanced to Personal Banker I in New York, earned my Series 6,
          Series 63, and NY State Insurance licenses, and worked directly with
          wealth and brokerage clients. Negotiating seed funding and Series A
          investments, building stakeholder trust, and navigating complex
          compliance frameworks taught me how to translate technical
          requirements into clear, client-facing solutions—an ability I lean on
          every day as a UI/UX developer.
        </p>

        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          In 2019 I returned to Wichita to co-found SellSafe, LLC as COO.
          Although the business ultimately stalled under COVID and personal
          family health challenges, I secured $150 K in seed capital within six
          weeks, drafted our P&L and investor pitch, and negotiated our MVP
          scope with development partners. That roller-coaster taught me
          resilience, rapid requirement gathering, and how to bridge
          communication between non-technical stakeholders and engineering
          teams.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          When COVID struck and my father&apos;s cancer treatments demanded my
          full attention, I paused formal employment and dove into coding. I
          enrolled in Coding Temple bootcamp—initially to explore data analytics
          in Python, but HTML, CSS, and JavaScript won me over. One week into
          React, I fell in love with component-driven development. By bootcamp
          graduation in January 2021 I&apos;d built my first React app—and then
          faced the brutal truth of interviewing blind. I doubled down on Udemy
          and Scrimba courses, spent two years obsessively refining HTML, CSS,
          and vanilla JS, then embraced React and Next.js to connect my design
          sensibility with scalable code.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          To support my family, I worked retail roles through
          2021–2024—including Market Team Trainer at Whole Foods and kitchen
          designer at Lowe&apos;s—where I honed stakeholder empathy by
          translating client needs into floor plans and process improvements. My
          Lowe&apos;s experience, in particular, solidified my passion for
          structured, iterative design reviews: listening to feedback, iterating
          quickly, and delivering joyful, accessible solutions (accessibility
          matters in all design, web or kitchen!).
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Since mid-2024 I&apos;ve ramped up freelance UI/UX development for
          real clients. My first project was a minimalist site that taught me
          end-to-end deployment; next came Moments to Memories by KAL (custom
          admin panel and client galleries), Criminal Rolls (an ordering system
          that took a one-off side hustle to sold-out weekly inventory), and a
          Prisma-backed blog platform for a writer. But the crown jewel is Our
          Health ROI—a Next.js site integrating three government APIs to
          quantify NIH funding and drive civic action. In its first five days it
          exceeded traffic expectations, and its fully accessible design meant
          anyone could participate.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Through every chapter—banking, startup life, caregiving, retail,
          self-teaching, and freelancing—I&apos;ve built one skill above all:
          empathy. Whether I&apos;m mapping a kitchen layout, negotiating a term
          sheet, or designing and developing a &lsaquo;Button&rsaquo; component
          with full keyboard support, I&apos;m solving human problems. Today,
          I&apos;m ready to bring this blend of business acumen, design-first
          development, and accessibility passion to a UI/UX developer role on a
          small-to-mid-sized startup team—helping you build products that not
          only look good, but truly work for everyone.Will you help me write my
          next chapter?
        </p>
      </LargeServiceContainer>
    </div>
  )
}
