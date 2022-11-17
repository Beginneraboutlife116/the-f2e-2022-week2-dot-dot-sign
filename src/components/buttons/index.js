import Image from "next/image"
import cancelIcon from "../../assets/img/cancel-icon.svg"

function CreateSignButton({ onClick, icon, label }) {
  return (
    <button
      className="btn btn__create-sign"
      onClick={onClick}
      aria-label={label}>
      {label}
      <Image src={icon} alt={label} width={"1.5em"} height={"1.5em"}></Image>
    </button>
  )
}

function LoadedSignButton({ onClick, cancelSignFile, signImage }) {
  return (
    <div className="btn__loaded-sign">
      <button className="btn" onClick={onClick}>
        <Image
          src={signImage}
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

function HistoryButton({ onClick, historyFile }) {
  return (
    <button
      onClick={onClick}
      aria-label={historyFile.name}
      className="btn btn_basic btn__history-file">
      <span>{historyFile.name}</span>
      <span>{historyFile.uploadedAt}</span>
      <span>{historyFile.lastOpened ? historyFile.lastOpened : "--"}</span>
    </button>
  )
}

function ActivateButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="btn btn_basic btn__activate">
      {label}
    </button>
  )
}

function DenyButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="btn btn_basic btn__deny">
      {label}
    </button>
  )
}

export {
  CreateSignButton,
  LoadedSignButton,
  ActivateButton,
  DenyButton,
  HistoryButton
}
