// components/modals/create-post-modal/CreatePostModal.jsx

'use client'

import styles from './CreatePostModal.module.scss'
import { useCreatePost } from '@/lib/hooks/blog/useCreatePost'
import Image from 'next/image'
import InputGroup from '@/components/inputs/input-group/InputGroup'

import 'highlight.js/styles/github.css' 

import TiptapEditor from '@/components/inputs/tiptap/TiptapEditor'


export default function CreatePostModal() {
  const {
    title,
    slug,
    imagePreview,
    content,
    description,
    errors,
    isSubmitting,
    successMessage,
    handleTitleChange,
    handleImageChange,
    handleDescriptionChange,
    handleContentChange,
    handleSubmit,
  } = useCreatePost()






  return (
    <div
      className={`bg-blue ${styles.createPostModal}`}
      role='dialog'
      aria-modal='true'
      aria-labelledby='create-post-title'
    >
      <h2 id='create-post-title'>Create Post</h2>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Title Input */}
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

        {/* Slug Display */}
        <InputGroup
          label='Post Slug'
          id='slug'
          type='text'
          value={slug}
          readOnly
          placeholder='Auto-generated slug'
          helperText='This slug will be used in the post URL.'
        />

        {/* Image Upload */}
        <InputGroup
          label='Post Image'
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          required
          error={errors.image}
          helperText='Upload an image related to your post.'
        />

        {/* Image Preview */}
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

        {/* Post Description */}
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
          // Enforce 100-word limit
        />

        {/* Tiptap content editor */}
        <div className={styles.inputGroup}>
          <label htmlFor='content' className={styles.label}>
            Post Content <span aria-hidden='true'>*</span>
          </label>
          <TiptapEditor content={content} onChange={handleContentChange} />
          {errors.content && (
            <span id='content-error' className={styles.error} role='alert'>
              {errors.content}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className={`bg-red border-200 br-800 ${styles.submitButton}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </button>
        {errors.submit && <span className={styles.error}>{errors.submit}</span>}
      </form>
    </div>
  )
}
