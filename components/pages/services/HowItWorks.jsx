import { icons } from '@/components/icons/icons'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'

export function HowItWorks() {
  return (
    <SmallServiceContainer
      className='bg-vibrant-blue'
      icon={icons.work.path}
      viewBox={icons.work.viewBox}
      xmlns={icons.work.xmlns}
      iconFill='fill-vibrant-blue'
      iconClassName='bg-orange'
      headerText='How It Works'
      headerClassName='bg-yellow'
    >
      <p className='border-2 br-5 bs-2'>
        So how does this whole process even work? Well, it depends on what you
        need!
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        For a basic one-page profile site or marketing presence, I would have a
        short 1-2 hour discovery and scope call, put together a design, recieve
        payment, develop the design, and give you the files or add you to the
        repository. For small builds it&apos;s a pretty simple process that
        should only take 1-2 weeks.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        For larger projects that will require user logins, ecommerce, blogs,
        image galleries, admin panels, and so on, expect an initial 1-2 hour
        discovery call. At that point, I decide if it sounds like a project I
        can afford to take on or not. If I can, I will spend a further week
        scoping out your project. Once I have a more concise view of your needs,
        I will then put together a proposal with a payment schedule and goals.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        During the build process I will update you weekly and sometimes daily on
        progress and with screen shots. This isn&apos;t to just be annoying or
        show off; it allows you the opportunity to give feedback during the
        development process. There is nothing worse than getting to the end and
        realizing you don&apos;t like how something looks! This allows us to
        catch errors as we are developing.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        While smaller one-page sites will sometimes be put together in HTML,
        CSS, and JavaScript, most everything is built in Nextjs, meaning I do
        not have files to share with you when the project is complete. Instead,
        upon final payment of the contract I will add you to the repository on
        GitHub so you have permanent access to your website files. At that
        point, I will remove myself from the repository and the site is 100%
        yours!
      </p>
    </SmallServiceContainer>
  )
}
