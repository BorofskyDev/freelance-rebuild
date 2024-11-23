// lib/functions/blog/uploadImage.js

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import imageCompression from 'browser-image-compression'
import { toast } from 'react-toastify'

export async function uploadImage(file, slug) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  }
  try {
    const compressedFile = await imageCompression(file, options)
    const imageRef = ref(storage, `postImages/${slug}-${compressedFile.name}`)
    await uploadBytes(imageRef, compressedFile)
    const uploadedImageURL = await getDownloadURL(imageRef)
    return uploadedImageURL
  } catch (error) {
    console.error('Error uploading image: ', error)
    toast.error('Failed to upload image. Please try again.')
    throw error
  }
}
