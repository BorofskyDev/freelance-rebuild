import { useEffect, useState } from 'react'
import TypographyButtons from './toolbar-buttons/TypographyButtons'
import HeaderButtons from './toolbar-buttons/HeaderButtons'
import AlignmentButtons from './toolbar-buttons/AlignmentButtons'
import ListButtons from './toolbar-buttons/ListButtons'
import ImageButtons from './toolbar-buttons/ImageButtons'
import styles from './EditorToolbar.module.scss'

export default function EditorToolbar({ editor }) {
    const [, setRefresh] = useState(0)

    useEffect(() => {
        if (!editor) return 

        const forceUpdate = () => setRefresh((x) => x + 1)

        editor.on('transaction', forceUpdate)

        return () => {
            editor.off('transaction', forceUpdate)
        }

    }, [editor])

    if (!editor) return null


  return (
    <div className={styles.toolbar}>
      <TypographyButtons editor={editor} />
      <HeaderButtons editor={editor} />
      <ListButtons editor={editor} />
      {/* <AlignmentButtons editor={editor} /> */}
        <ImageButtons editor={editor} />
    </div>
  )
}
