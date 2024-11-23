// pages/blog/page.jsx
import { dbAdmin } from '@/lib/firebaseAdmin'
import BlogClientPage from '@/components/blog/blog-client-page/BlogClientPage'

export default async function BlogPage() {
  // Fetch posts server-side
  const postsSnapshot = await dbAdmin
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .get()

  const posts = postsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate().toISOString() || null,
    updatedAt: doc.data().updatedAt?.toDate().toISOString() || null,
    publishDate: doc.data().publishDate?.toDate().toISOString() || null,
  }))

  return <BlogClientPage posts={posts} />
}
