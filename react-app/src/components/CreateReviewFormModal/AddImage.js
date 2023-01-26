import { useState } from "react"

export default function AddImage(){

    const [ preview, setPreview ] = useState([])

    const handleChange = e => {
        const files = e.target.files;
        const previewImages = []

        for (let i = 0; i < files.length; i++){
            const file = files[i]
            const reader = new FileReader()
            reader.onload = e => {
                previewImages.push(e.target.result)
                setPreview(previewImages)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div>
            <input
                name="images"
                type="file"
                id="fileInput"
                onChange={handleChange}
                multiple
            />
            <div>
                {preview.map((item, index)=> (
                    <img key={index} src={item} alt="preview"/>
                ))}
            </div>
        </div>
    )
}
