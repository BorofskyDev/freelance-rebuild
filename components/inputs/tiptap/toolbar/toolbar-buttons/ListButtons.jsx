import ToolbarButton from '../toolbar-button/ToolbarButton'

export default function ListButtons({ editor }) {
  if (!editor) {
    return null
  }

  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
        ariaLabel='Bullet List'
      >
        Bullet List
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive('orderedList')}
        ariaLabel='Ordered List'
      >
        Numbered List
      </ToolbarButton>

    </>
  )
}
