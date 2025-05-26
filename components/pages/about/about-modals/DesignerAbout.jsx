import ImageContainer from '@/components/containers/image-container/ImageContainer'
import { icons } from '@/components/icons/icons'
import catPhoto from '@/public/img/profile/joel-maxima.png'
import styles from './AboutModals.module.scss'
import LargeServiceContainer from '@/components/containers/service-containers/large-service-container/LargeServiceContainer'

export function DesignerAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        image={{
          src: catPhoto,
          alt: 'Joel Borofsky with his cat Maxima',
          wrapperClass: 'bg-pink',
          imageClass: 'bg-vibrant-purple',
        }}
        title={{
          text: 'Maxima',
          containerBg: 'bg-yellow',
        }}
        note='Demon Kitty'
        icons={[
          {
            className: 'bg-violet',
            fill: 'fill-yellow',
            icon: icons.cat.path,
            xmlns: icons.cat.xmlns,
            viewBox: icons.cat.viewBox,
          },
          {
            className: 'bg-orange',
            fill: 'fill-vibrant-purple',
            icon: icons.cuteCat.path,
            xmlns: icons.cuteCat.xmlns,
            viewBox: icons.cuteCat.viewBox,
          },
        ]}
      />

      <LargeServiceContainer
        className='bg-pink'
        icon={icons.cat.path}
        viewBox={icons.cat.viewBox}
        xmlns={icons.cat.xmlns}
        fill='fill-vibrant-red'
        iconClassName='bg-blue'
        headerText='Design Process'
        headerClassName='bg-yellow'
      >
        <p className='border-2 br-5 bs-2'>
          Every design starts with two questions: “Is this accessible?” and
          “Does it look great?” In Figma, that means choosing color palettes
          with WCAG contrast ratios in mind, setting type scales that read
          crisply at every breakpoint, and using white space intentionally—not
          just for aesthetics, but to guide the eye and improve legibility. I
          kick off by running my color choices through Figma&apos;s WCAG checker
          (and later WAVE or Axe in the browser), so I catch low-contrast text
          or confusing color pairings before they ever make it into code. To me,
          a button you can&apos;t see or can&apos;t click is just as broken as
          an API that never responds.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          With accessibility baked in, I wire up high-fidelity screens in
          Figma—skipping pixel-perfect obsessing, since I&apos;m also the dev
          and know I can tweak on the fly. If a layout shifts dramatically
          between desktop, tablet, and mobile, I&apos;ll wireframe each;
          otherwise, I lean on responsive container queries and fluid grids in
          code. For rapid prototyping, Tailwind lets me create functional
          layouts in minutes; but for production I default to SCSS with
          well-organized variables, mixins, and partials so my design
          tokens—colors, spacers, type scales—live in one place and are easy to
          maintain or extend.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I love to explore &quot;big&quot; design ideas early—bold
          interactions, playful micro-animations—and then pull back to refine
          toward clarity. Since Framer Motion and Next Themes plug right into my
          Next.js projects with minimal JS overhead, I often skip static Figma
          prototypes altogether and build interactive components directly. That
          way I&apos;m testing real code: toggling light/dark mode,
          keyboard-navigating focus states, verifying smooth motion. Once the
          client sees a live Vercel preview, they can click through flows, leave
          comments in Figma screenshots or call out tweaks after exploring the
          staging site.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I&apos;ve stumbled, too. On the Criminal Rolls admin panel I built a
          complex order-creation modal that handled every business rule the
          client needed—variants, modifiers, discounts, you name it. I even made
          non-essential fields optional in the schema…but forgot to signal that
          in the UI. The client hit the form, saw pages of fields with no
          distinction between &quot;required&quot; and &quot;nice-to-have,&quot;
          and stopped. It was my oversight: without clear labels or visual cues
          for optional versus mandatory inputs, I&apos;d created an accessibility
          (and usability) barrier. That taught me to always include explicit
          indicators—asterisks for required fields, &quot;(optional)&quot; labels, grouped
          sections—so no user ever wonders what they must fill out.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Over time, I&apos;ve seen this accessibility-first, user-centered
          approach boost engagement dramatically—clear visual hierarchy and
          consistent button styling on my own portfolio translated to higher
          click-through rates, while clients report fewer support requests
          because their users never get &quot;stuck&quot; or wonder which
          element is clickable. By marrying a rigorous design process with
          hands-on development, I deliver UIs that aren&apos;t just
          beautiful—they work for everyone, on day one.
        </p>
      </LargeServiceContainer>
    </div>
  )
}
