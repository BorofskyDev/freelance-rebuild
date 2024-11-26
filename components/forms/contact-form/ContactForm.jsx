// components/forms/contact-form/ContactForm.jsx

'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import InputGroup from '@/components/inputs/input-group/InputGroup' // Import InputGroup
import styles from './ContactForm.module.scss'
import SubmitButton from '@/components/buttons/submit-button/SubmitButton'
import MediumTitleContainer from '@/components/containers/title-containers/medium-title-container/MediumTitleContainer'

export default function ContactForm() {
  // State variables for form fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // State variables for form status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSuccessMessage('')

    // Basic validation
    let formErrors = {}
    if (!name.trim()) formErrors.name = 'Name is required'
    if (!email.trim()) {
      formErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      formErrors.email = 'Invalid email address'
    }
    if (!subject.trim()) formErrors.subject = 'Subject is required'
    if (!message.trim()) formErrors.message = 'Message is required'

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setIsSubmitting(false)
      return
    }

    // Prepare the message object
    const newMessage = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      businessName: businessName.trim() || null,
      subject: subject.trim(),
      message: message.trim(),
      createdAt: Timestamp.now(),
    }

    try {
      // Add the message to Firestore
      const docRef = await addDoc(collection(db, 'messages'), newMessage)
      console.log('Message sent with ID: ', docRef.id)
      setSuccessMessage('Your message has been sent successfully!')
      // Reset form fields
      setName('')
      setEmail('')
      setPhone('')
      setBusinessName('')
      setSubject('')
      setMessage('')
    } catch (error) {
      console.error('Error sending message: ', error)
      setErrors({ submit: 'Failed to send your message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Email validation function
  const validateEmail = (email) => {
    // Simple email regex (you can use a more robust one if needed)
    return /\S+@\S+\.\S+/.test(email)
  }

  return (
    <div
      className={`bg-blue border-4 br-8 bs-6 ${styles.contactFormContainer}`}
    >
      <MediumTitleContainer className='bg-orange'>Get In Touch!</MediumTitleContainer>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        {/* Name */}
        <InputGroup
          label='Name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
          required
          error={errors.name}
          helperText=''
        />

        {/* Email */}
        <InputGroup
          label='Email'
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          required
          error={errors.email}
          helperText=''
        />

        {/* Phone */}
        <InputGroup
          label='Phone'
          id='phone'
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone number (optional)'
          required={false}
          error={errors.phone}
          helperText=''
        />

        {/* Business Name */}
        <InputGroup
          label='Business Name'
          id='businessName'
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder='Business name (optional)'
          required={false}
          error={errors.businessName}
          helperText=''
        />

        {/* Subject */}
        <InputGroup
          label='Subject'
          id='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Enter the subject'
          required
          error={errors.subject}
          helperText=''
        />

        {/* Message */}
        <InputGroup
          label='Message'
          id='message'
          isTextarea={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          required
          error={errors.message}
          helperText=''
        />

        {/* Submit Button */}
        <SubmitButton
          type='submit'
          disabled={isSubmitting}
          className={`bg-green ${styles.twoCols}`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </SubmitButton>

        {errors.submit && <p className={styles.errorText}>{errors.submit}</p>}
      </form>
    </div>
  )
}
