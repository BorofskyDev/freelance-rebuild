import ImageContainer from '@/components/containers/image-container/ImageContainer'
import { icons } from '@/components/icons/icons'
import railroad from '@/public/img/profile/railroad-cutout.png'
import styles from './AboutModals.module.scss'
import LargeServiceContainer from '@/components/containers/service-containers/large-service-container/LargeServiceContainer'

export function DeveloperAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        image={{
          src: railroad,
          alt: 'Joel Borofsky black and white carrying a railroad tie',
          wrapperClass: 'bg-blue',
          imageClass: 'bg-vibrant-blue',
        }}
        title={{
          text: 'Putting In Work',
          containerBg: 'bg-green',
        }}
        note='Not a model'
        icons={[
          {
            className: 'bg-orange',
            fill: 'fill-vibrant-purple',
            icon: icons.handshake.path,
            xmlns: icons.handshake.xmlns,
            viewBox: icons.handshake.viewBox,
          },
          {
            className: 'bg-pink',
            fill: 'fill-vibrant-blue',
            icon: icons.liberty.path,
            xmlns: icons.liberty.xmlns,
            viewBox: icons.liberty.viewBox,
          },
        ]}
        className={` ${styles.imageContainer}`}
      />

      <LargeServiceContainer
        className='bg-blue'
        icon={icons.liberty.path}
        viewBox={icons.liberty.viewBox}
        xmlns={icons.liberty.xmlns}
        iconFill='fill-vibrant-blue'
        iconClassName='bg-yellow'
        headerText='Development Process'
        headerClassName='bg-red'
      >
        <p className='border-2 br-5 bs-2'>
          When I pick up a new project, I start by mapping out the scope as a
          whole and breaking it into self-contained components. From day one
          I&apos;m thinking about accessibility: semantic HTML, Heading
          as=&apos;h2&apos; design=&apos;section-heading,&apos; props to
          centralize all header styles, ARIA labels on buttons, clear tabindex,
          and alt-text (or alt=&quot;&quote; on purely decorative images). This
          means every UI piece ships fully keyboard-navigable and
          screen-reader–friendly, even in early alphas.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Next, I sketch out what the backend needs to look like. In early
          builds I defaulted to Firebase for everything; today I choose based on
          data shape—Firebase for loosely structured, realtime data, and
          Prisma/PostgreSQL whenever relationships matter. That backend
          blueprint informs my API layer, data hooks, and ultimately how I
          architect each component to fetch or mutate data.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          To validate feasibility fast, I&apos;ll often build a vanilla-JS proof
          of concept—case in point, Our Health ROI. A user asked if NIH grant
          lookups were workable, so I created a plain HTML + JS snippet to call
          the NIH API, check performance, and parse results on the fly. Once
          that felt solid, I folded the logic into my Next.js app, wired in
          loading states, error handling, and pagination hooks, then wrapped it
          all in my design system.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Design happens in parallel: I lay out screens in Figma, then scaffold
          a project-specific design system (buttons, form fields, links,
          headings) in code. From there I build out each page with Framer Motion
          for micro-interactions and Next Themes for light/dark mode—both drop
          in with minimal JS yet add polish that plain CSS can&apos;t match.
          Every component ships feature-complete: if a button should submit
          data, it&apos;s keyboard-enabled, has an aria-label, focus styles, and
          works for every edge case before I move on.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Finally, I test by &apos;dog-fooding&apos; the build—clicking through flows,
          watching Network timings, running accessibility audits, and using a
          screen reader to catch any gaps. I partner with clients one-on-one to
          refine labeling, tweak copy, and ensure every feature does exactly
          what they need. The result? Fully accessible, design-driven UIs that
          feel as good to use as they do to build.
        </p>
      </LargeServiceContainer>
    </div>
  )
}
