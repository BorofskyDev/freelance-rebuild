import PageHeader from '@/components/typography/headers/page-header/PageHeader'

import ModalLinkContainer from '@/components/containers/section-containers/modal-link-container/ModalLinkContainer'
import IconModalButton from '@/components/buttons/icon-modal-button/IconModalButton'
import BlogPreviewModal from '@/components/modals/blog-preview-modal/BlogPreviewModal'
import { icons } from '@/components/icons/icons'
import PageContainer from '@/components/containers/page-container/PageContainer'
import BlogListModal from '@/components/modals/blog-list-modal/BlogListModal'
import TagListModal from '@/components/modals/tag-list-modal/TagListModal'

export default function BlogPage() {
    return (
      <PageContainer className='bg-green'>
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
          <IconModalButton
            label='All Posts'
            icon={icons.posts.path}
            viewBox={icons.posts.viewBox}
            xmlns={icons.posts.xmlns}
            className='fill-vibrant-purple bg-orange'
            modalContent={<BlogListModal />}
            modalBg='bg-orange'
          />
          {/* <IconModalButton 
            label='Categories'
            icon={icons.categories.path}
            viewBox={icons.categories.viewBox}
            xmlns={icons.categories.xmlns}
            className='fill-vibrant-red bg-yellow'
            modalContent={<TagListModal />}
            modalBg='bg-yellow'
          /> */}
        </ModalLinkContainer>
      </PageContainer>
    )
}