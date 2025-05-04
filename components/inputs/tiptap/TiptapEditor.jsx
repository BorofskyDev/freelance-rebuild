'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import EditorToolbar from './toolbar/EditorToolBar'
import styles from './TiptapEditor.module.scss'

export default function TiptapEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        underline: false,
      }),
      Underline.configure({
        name: 'underline',
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      Link.configure({ openOnClick: true }),
      Image.configure({ inline: false }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  })

  return (
    <div className={styles.editorContainer}>
      <EditorToolbar editor={editor} />
      <EditorContent className={styles.contentEditor} editor={editor} />
    </div>
  )
}
