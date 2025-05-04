import ToolbarButton from '../toolbar-button/ToolbarButton'

export default function AlignmentButtons({ editor }) {
  if (!editor) return null

  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        isActive={editor.isActive('textAlign', { textAlign: 'left' })}
        ariaLabel='Align left'
      >
        Left
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        isActive={editor.isActive('textAlign', { textAlign: 'center' })}
        ariaLabel='Align center'
      >
        Center
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        isActive={editor.isActive('textAlign', { textAlign: 'right' })}
        ariaLabel='Align right'
      >
        Right
      </ToolbarButton>
    </>
  )
}
