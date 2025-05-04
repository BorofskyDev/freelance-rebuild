import ToolbarButton from '../toolbar-button/ToolbarButton'

export default function HeaderButtons({ editor }) {
  if (!editor) return null

  return (
    <>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 })}
        ariaLabel='Heading 2'
      >
        Post Heading
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive('heading', { level: 3 })}
        ariaLabel='Heading 3'
      >
        Section Heading
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        isActive={editor.isActive('heading', { level: 4 })}
        ariaLabel='Heading 4'
      >
        Paragraph Heading
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        isActive={editor.isActive('heading', { level: 5 })}
        ariaLabel='Heading 5'
      >
        Sub Heading
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        isActive={editor.isActive('heading', { level: 6 })}
        ariaLabel='Heading 6'
      >
        Tiny Heading
      </ToolbarButton>
    </>
  )
}
