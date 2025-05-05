// components/modals/edit-post-modal/EditPostModal.jsx

'use client'

import { useEditPost } from '@/lib/hooks/blog/useEditPost'
import { handleEditPostSubmit } from '@/lib/functions/blog/handleEditPostSubmit'
import InputGroup from '@/components/inputs/input-group/InputGroup'

import 'highlight.js/styles/github.css' // Import Highlight.js styles
import { useTags } from '@/lib/hooks/blog/useTags'
import Image from 'next/image'
import Modal from '@/components/modals/Modal' // Import your custom Modal component
import styles from './EditPostModal.module.scss'
import { uploadImage } from '@/lib/functions/blog/uploadImage' // Make sure this path is correct
import TiptapEditor from '@/components/inputs/tiptap/TiptapEditor'

export default function EditPostModal({ postId, onClose }) {
  console.log('EditPostModal Rendered with postId:', postId)

  const {
    post,
    title,
    setTitle,
    slug,
    setSlug,
    imageURL,
    setImageURL,
    imageFile,
    setImageFile,
    imagePreview,
    setImagePreview,
    description,
    setDescription,
    content,
    setContent,
    selectedTags,
    published,
    setPublished,
    publishDate,
    setPublishDate,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
    successMessage,
    setSuccessMessage,
    editorRef,
  } = useEditPost(postId, onClose)

  

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
  }

  const handleDescriptionChange = (e) => {
    const input = e.target.value
    const wordCount = input
      .trim()
      .split(/\s+/)
      .filter((word) => word).length

    if (wordCount <= 100) {
      setDescription(input)
      setErrors((prev) => ({ ...prev, description: null }))
    } else {
      setErrors((prev) => ({
        ...prev,
        description: 'Description cannot exceed 100 words.',
      }))
    }
  }

  const handleContentChange = (value) => {
    setContent(value)
    setErrors((prev) => ({ ...prev, content: null }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImageFile(null)
      setImagePreview(imageURL)
    }
  }

 

  if (!post) {
    return (
      <Modal isOpen={true} onClose={onClose}>
        <div className={styles.editPostModal} role='dialog' aria-modal='true'>
          <p>Loading...</p>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={styles.editPostModal} role='dialog' aria-modal='true'>
        <h2 className='text-xl font-bold mb-4'>Edit Post</h2>
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
        <form
          className={styles.form}
          onSubmit={(e) =>
            handleEditPostSubmit(
              e,
              postId,
              {
                title,
                description,
                content,
                selectedTags,
                imageFile,
                imageURL,
                slug,
                published,
                publishDate,
              },
              (newState) => {
                setIsSubmitting(newState.isSubmitting)
                setErrors(newState.errors || {})
                setSuccessMessage(newState.successMessage || '')
              },
              onClose
            )
          }
        >
          <InputGroup
            label='Post Title'
            id='title'
            type='text'
            value={title}
            onChange={handleTitleChange}
            placeholder='Enter post title'
            required
            error={errors.title}
            helperText='Enter a descriptive title for your post.'
          />

          <InputGroup
            label='Post Slug'
            id='slug'
            type='text'
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder='Slug'
            helperText='The slug used in the post URL.'
          />

          <InputGroup
            label='Post Image'
            id='image'
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            error={errors.image}
            helperText='Upload an image related to your post.'
          />

          {imagePreview && (
            <div className={styles.imagePreview}>
              <Image
                src={imagePreview}
                alt='Image Preview'
                width={800}
                height={600}
                unoptimized
              />
            </div>
          )}

          <InputGroup
            label='Post Description'
            id='description'
            isTextarea={true}
            value={description}
            onChange={handleDescriptionChange}
            placeholder='Enter a brief description (max 100 words)'
            required
            error={errors.description}
            helperText='Provide a concise description of your post (up to 100 words).'
          />

         

          <div className={styles.inputGroup}>
            <label
              htmlFor='content'
              className={`border-1 bs-3 br-4 fw-bold bg-light fs-200 ${styles.label}`}
            >
              Post Content <span aria-hidden='true'>*</span>
            </label>
            <TiptapEditor content={content} onChange={handleContentChange} />
            {errors.content && (
              <span id='content-error' className={styles.error} role='alert'>
                {errors.content}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor='published' className={styles.label}>
              <input
                type='checkbox'
                id='published'
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />{' '}
              Published
            </label>
          </div>

          {published && (
            <InputGroup
              label='Publish Date'
              id='publishDate'
              type='datetime-local'
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              error={errors.publishDate}
              helperText='Select a future date to schedule the post.'
            />
          )}

          <div className={styles.buttonGroup}>
            <button
              type='submit'
              className={`bg-blue border-200 br-800 ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Post'}
            </button>
            <button
              type='button'
              className={`ml-4 ${styles.cancelButton}`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          {errors.submit && (
            <span className={styles.error} role='alert'>
              {errors.submit}
            </span>
          )}
        </form>
      </div>
    </Modal>
  )
}
