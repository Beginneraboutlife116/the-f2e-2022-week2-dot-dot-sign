import Image from "next/image"
import penIcon from "../../assets/img/pen-icon.svg"
import cancelIcon from "../../assets/img/cancel-icon.svg"

function UpdateButton({ onClick, icon, label }) {
  return (
    <button className="btn btn__create-sign" onClick={onClick}>
      {label}
      <Image src={icon} alt={label} width={"1.5em"} height={"1.5em"}></Image>
    </button>
  )
}

function LoadedSignButton({ onClick, cancelSignFile }) {
  return (
    <div className="btn__loaded-sign">
      <button className="btn" onClick={onClick}>
        <Image
          src={penIcon}
          className="btn__loaded-image"
          alt="載入之簽名檔"></Image>
      </button>
      <button className="btn">
        <Image
          src={cancelIcon}
          alt="取消載入簽名檔的按鈕"
          onClick={cancelSignFile}></Image>
      </button>
    </div>
  )
}

function BasicButton({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`btn btn__basic ${className}`}>
      {children}
    </button>
  )
}

export { UpdateButton, LoadedSignButton, BasicButton }
