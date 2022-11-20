import { useRef, useState, useEffect } from "react"
import pdfIcon from "../../assets/img/pdf-icon.svg"
import Image from "next/image"

export default function FileSelect() {
  const [checked, setChecked] = useState("upload")
  function handleChange(e) {
    setChecked(e.target.value)
  }
  return (
    <>
      <header className="file-select__header">
        <input
          id="upload"
          type="radio"
          name="action"
          onChange={handleChange}
          value="upload"
          className="file-select__radio"
          checked={checked === "upload"}
        />
        <label htmlFor="upload" className="file-select__label">
          上傳新文件
        </label>
        <input
          id="select"
          type="radio"
          name="action"
          onChange={handleChange}
          value="select"
          className="file-select__radio"
          checked={checked === "select"}
        />
        <label htmlFor="select" className="file-select__label">
          選擇已上傳文件
        </label>
      </header>
      <div className="file-select__content">{<FileSelectContent />}</div>
    </>
  )
}

function FileSelectContent() {
  const canvasRef = useRef(null)
  const inputLabelRef = useRef(null)
  useEffect(() => {
    const label = inputLabelRef.current
    const canvas = canvasRef.current
    canvas.height = label.offsetHeight
    const ctx = canvas.getContext("2d")
  }, [])
  function handleChange(e) {
    const file = e.target.files[0]
    if (file.type !== "application/pdf") {
      console.log("wrong data type")
    }
    if (file.size > 10 * 1024 * 1024) {
      console.log("exceeded size")
    }
  }
  return (
    <>
      <input
        type="file"
        name="upload"
        id="upload file"
        className="file-select__upload-input"
        accept="application/pdf"
        onChange={handleChange}
      />
      <label
        htmlFor="upload file"
        className="file-select__upload"
        ref={inputLabelRef}>
        <div className="file-select__info">
          <span>點擊此處上傳 或 直接拖曳檔案</span>
          <Image src={pdfIcon} alt="pdf icon" className="pdf-icon" />
          <span>(限10MB以下PDF檔)</span>
        </div>
        {true && (
          <canvas className="file-select__canvas" ref={canvasRef}></canvas>
        )}
      </label>
    </>
  )
}
