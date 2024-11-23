// lib/functions/blog/handleEditPostSubmit.js

import { doc, updateDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/functions/blog/uploadImage'
import { toast } from 'react-toastify'

export async function handleEditPostSubmit(
  e,
  postId,
  formState,
  setFormState,
  onClose
) {
  e.preventDefault()
  const {
    title,
    description,
    content,
    selectedTags,
    imageFile,
    imageURL,
    slug,
    published,
    publishDate,
  } = formState

  setFormState((prev) => ({ ...prev, isSubmitting: true, errors: {} }))

  // Basic Validation
  const newErrors = {}
  if (!title.trim()) newErrors.title = 'Title is required.'
  if (!description.trim()) newErrors.description = 'Description is required.'
  else {
    const wordCount = description
      .trim()
      .split(/\s+/)
      .filter((word) => word).length
    if (wordCount > 100)
      newErrors.description = 'Description cannot exceed 100 words.'
  }
  if (!content.trim() || content === '<p><br></p>')
    newErrors.content = 'Content is required.'
  if (selectedTags.length === 0)
    newErrors.tags = 'At least one tag is required.'

  if (Object.keys(newErrors).length > 0) {
    setFormState((prev) => ({
      ...prev,
      errors: newErrors,
      isSubmitting: false,
    }))
    return
  }

  try {
    let updatedImageURL = imageURL
    if (imageFile) {
      // Upload new image
      updatedImageURL = await uploadImage(imageFile, slug)
    }

    const docRef = doc(db, 'posts', postId)
    await updateDoc(docRef, {
      title: title.trim(),
      description: description.trim(),
      content,
      tags: selectedTags,
      imageURL: updatedImageURL,
      published,
      updatedAt: serverTimestamp(),
      publishDate: publishDate
        ? Timestamp.fromDate(new Date(publishDate))
        : null,
    })

    setFormState((prev) => ({
      ...prev,
      successMessage: 'Post updated successfully!',
      isSubmitting: false,
    }))
    toast.success('Post updated successfully!')
    onClose()
  } catch (error) {
    console.error('Error updating post:', error)
    setFormState((prev) => ({
      ...prev,
      errors: { submit: 'Failed to update post. Please try again.' },
      isSubmitting: false,
    }))
    toast.error('Failed to update post. Please try again.')
  }
}
