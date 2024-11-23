// lib/hooks/blog/useEditPost.js

import { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'react-toastify'

export function useEditPost(postId, onClose) {
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [published, setPublished] = useState(false)
  const [publishDate, setPublishDate] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const editorRef = useRef(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', postId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log('Post data:', docSnap.data())
          const fetchedPost = { id: docSnap.id, ...docSnap.data() }
          setPost(fetchedPost)

          // Update state variables with fetched post data
          setTitle(fetchedPost.title || '')
          setSlug(fetchedPost.slug || '')
          setImageURL(fetchedPost.imageURL || '')
          setImagePreview(fetchedPost.imageURL || null)
          setDescription(fetchedPost.description || '')
          setContent(fetchedPost.content || '')
          setSelectedTags(fetchedPost.tags || [])
          setPublished(fetchedPost.published || false)
          setPublishDate(
            fetchedPost.publishDate
              ? fetchedPost.publishDate.toDate().toISOString().substring(0, 16)
              : ''
          )
        } else {
            console.error('Post not found')
          toast.error('Post not found.')
          onClose()
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        toast.error('Failed to load post. Please try again.')
        onClose()
      }
    }

    fetchPost()
  }, [postId])

  return {
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
    setSelectedTags,
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
  }
}
