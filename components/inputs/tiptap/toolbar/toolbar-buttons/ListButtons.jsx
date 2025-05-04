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
        Ordered List
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        isActive={editor.isActive('taskList')}
        ariaLabel='Task List'
      >
        Task List
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive('codeBlock')}
        ariaLabel='Code Block'
      >
        Code Block
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHorizontalRule().run()}
        isActive={editor.isActive('horizontalRule')}
        ariaLabel='Horizontal Rule'
      >
        Horizontal Rule
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setHardBreak().run()}
        isActive={editor.isActive('hardBreak')}
        ariaLabel='Hard Break'
      >
        Hard Break
      </ToolbarButton>
    </>
  )
}
