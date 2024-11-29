import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import ModalLinkContainer from '@/components/containers/section-containers/modal-link-container/ModalLinkContainer'
import IconModalButton from '@/components/buttons/icon-modal-button/IconModalButton'
import { icons } from '@/components/icons/icons'
import {
  WebDesign,
  WebDevelopment,
  BusinessDev,
  Prices,
  HowItWorks,
} from '@/components/pages/services'

import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import PageContainer from '@/components/containers/page-container/PageContainer'
import { Stack } from '@/components/pages/services/Stack'

export default function ServicesPage() {
  return (
    <PageContainer className='bg-blue'>
      <PageHeader>Services!</PageHeader>
      <ModalLinkContainer>
        <IconModalButton
          label='Web Design'
          icon={icons.designer.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          className='fill-vibrant-blue bg-red'
          modalContent={<WebDesign />}
          modalBg='bg-red'
        />
        <IconModalButton
          label='Web Developer'
          icon={icons.developer.path}
          viewBox={icons.developer.viewBox}
          xmlns={icons.developer.xmlns}
          className='fill-vibrant-pink bg-green'
          modalContent={<WebDevelopment />}
          modalBg='bg-green'
        />
        <IconModalButton
          label='Business Development'
          icon={icons.business.path}
          viewBox={icons.business.viewBox}
          xmlns={icons.business.xmlns}
          className='fill-green bg-pink'
          modalContent={<BusinessDev />}
          modalBg='bg-pink'
        />
        <IconModalButton
          label='Prices'
          icon={icons.dollar.path}
          viewBox={icons.dollar.viewBox}
          xmlns={icons.dollar.xmlns}
          className='fill-vibrant-purple bg-yellow'
          modalContent={<Prices />}
          modalBg='bg-yellow'
        />
        <IconModalButton
          label='How It Works'
          icon={icons.work.path}
          viewBox={icons.work.viewBox}
          xmlns={icons.work.xmlns}
          className='fill-vibrant-blue bg-orange'
          modalContent={<HowItWorks />}
          modalBg='bg-orange'
        />
        <IconModalButton
          label='Stack'
          icon={icons.stack.path}
          viewBox={icons.stack.viewBox}
          xmlns={icons.stack.xmlns}
          className='fill-vibrant-red bg-violet'
          modalContent={<Stack />}
          modalBg='bg-violet'
        />
      </ModalLinkContainer>
      <InternalLinkBox href='/contact' >
        Contact Me!
      </InternalLinkBox>
    </PageContainer>
  )
}
