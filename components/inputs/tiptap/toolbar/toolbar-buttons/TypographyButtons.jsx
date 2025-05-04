import ToolbarButton from '../toolbar-button/ToolbarButton'

export default function TypographyButtons({ editor }) {
  if (!editor) return null

  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        ariaLabel='Bold'
      >
        Bold
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        ariaLabel='Italic'
      >
        Italic
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          if (editor) {
            editor.chain().focus().toggleUnderline().run()
          }
        }}
        isActive={editor && editor.isActive('underline')}
        ariaLabel='Underline'
      >
        Underline
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        ariaLabel='Strikethrough'
      >
        Strikethrough
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
        ariaLabel='Blockquote'
      >
        Blockquote
      </ToolbarButton>
    </>
  )
}
