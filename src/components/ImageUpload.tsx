import { ChangeEvent, useRef, useState } from "react";
import Button from "./Button";




export default function ImageUpload() {

  const [image, setImage] = useState<File | null>(null);

  const fileInput = useRef<HTMLInputElement | null>(null);

  function handleUploadClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }
  function handleUploadImage(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  }
  function handleDeleteImage() {
    setImage(null);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-neutral-900">
      <div className="w-[300px] h-[400px] rounded-2xl bg-white flex flex-col justify-between items-center py-10">

        <div className="rounded-full border-2 border-neutral-200 w-28 h-28  overflow-hidden">
          <img src={`${image ? URL.createObjectURL(image) : "profile.jpg"}`} alt="profile" className="object-cover object-center w-full h-full" />
        </div>

        <div>
          <Button btnText="Upload" onClickHandler={handleUploadClick}/>
          
          {image &&
            <Button btnText="Delete" onClickHandler={handleDeleteImage}/>
          }
        </div>

        <input type="file" ref={fileInput} onChange={handleUploadImage} className="hidden" />
      </div>
    </div>
  )
}
