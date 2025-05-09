import ToolbarButton from "../toolbar-button/ToolbarButton";

export default function ImageButtons({editor}) {
    if (!editor) return null;

    const handleImageUpload = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'

        input.onchange = async () => {
            const file = input.files?.[0]
            if (!file) return 

            const reader = new FileReader()
            reader.onloadend = () => {
                const base64 = reader.result 
                editor.chain().focus().setImage({ src: base64 }).run()
            }
            reader.readAsDataURL(file)
        }
        input.click()
    }

    return (
        <ToolbarButton
            onClick={handleImageUpload}
            ariaLabel="Insert Image"
        >
            Image
        </ToolbarButton>
    )
}