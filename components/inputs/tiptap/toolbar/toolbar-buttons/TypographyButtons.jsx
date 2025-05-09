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
        B
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        ariaLabel='Italic'
      >
        I
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
        U
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        ariaLabel='Strikethrough'
      >
        ST
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive('blockquote')}
        ariaLabel='Blockquote'
      >
        BQ
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          const previousUrl = editor.getAttributes('link').href
          const url = window.prompt('URL', previousUrl || '')

          if (url === null) return

          if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
          }
          editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: url })
            .run()
        }}
        isActive={editor.isActive('link')}
        ariaLabel='Link'
      >
        Link
      </ToolbarButton>
    </>
  )
}
