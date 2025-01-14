import FlexColRowContainer from '@/components/containers/section-containers/flex-col-row-container/FlexColRowContainer'

import HeroContent from './hero-content/HeroContent'
import HeroImage from './hero-image/HeroImage'

function HeroSection() {
  return (
    <FlexColRowContainer>
        <HeroContent />
        <HeroImage />
    </FlexColRowContainer>
  )
}
export default HeroSection