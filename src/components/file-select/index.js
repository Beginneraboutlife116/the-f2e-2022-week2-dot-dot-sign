import { useState } from "react"

export default function FileSelect() {
  const [checked, setChecked] = useState("upload")
  function handleChange(e) {
    setChecked(e.target.value)
  }
  return (
    <>
      <header className="file-select__header">
        <input
          id="upload new file"
          type="radio"
          name="action"
          onChange={handleChange}
          value="upload"
          className="file-select__radio"
          checked={checked === "upload"}
        />
        <label htmlFor="upload new file" className="file-select__label">
          上傳新文件
        </label>
        <input
          id="select uploaded files"
          type="radio"
          name="action"
          onChange={handleChange}
          value="select"
          className="file-select__radio"
          checked={checked === "select"}
        />
        <label htmlFor="select uploaded files" className="file-select__label">
          選擇已上傳文件
        </label>
      </header>
      <div className="file-select__content">{<FileSelectContent />}</div>
    </>
  )
}

function FileSelectContent() {
  return (
    <>
      <input type="file" />
    </>
  )
}
