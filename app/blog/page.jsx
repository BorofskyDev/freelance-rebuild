import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import styles from './page.module.scss'
import ModalLinkContainer from '@/components/containers/section-containers/modal-link-container/ModalLinkContainer'
import IconModalButton from '@/components/buttons/icon-modal-button/IconModalButton'
import BlogPreviewModal from '@/components/modals/blog-preview-modal/BlogPreviewModal'
import { icons } from '@/components/icons/icons'

export default function BlogPage() {
    return (
      <section className={`bg-green ${styles.blogPage}`}>
        <PageHeader>HTMHell</PageHeader>
        <ModalLinkContainer>
          <IconModalButton
            label='Most Recent Post'
            icon={icons.starFilled.path}
            viewBox={icons.starFilled.viewBox}
            xmlns={icons.starFilled.xmlns}
            className='fill-vibrant-blue bg-pink'
            modalContent={<BlogPreviewModal />}
            modalBg='bg-pink'
          />
        </ModalLinkContainer>
      </section>
    )
}