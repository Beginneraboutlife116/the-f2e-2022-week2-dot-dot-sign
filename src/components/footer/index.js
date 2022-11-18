import { DenyButton, ActivateButton } from "../buttons"

export default function Footer({ step }) {
  let content
  if (step === "upload") {
    content = <FooterUploadBtnPanel />
  }
  if (step === "create") {
    content = <FooterCreateBtnPanel />
  }
  if (step === "download") {
    content = <FooterDownloadBtnPanel />
  }
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="progress">
          <div className="progress__first">
            <p>上傳文件</p>
            <div className="dot"></div>
          </div>
          <div className="progress__second">
            <p>進行簽署</p>
            <div className="dot"></div>
          </div>
          <div className="progress__third">
            <p>下載文件</p>
            <div className="dot"></div>
          </div>
        </div>
        <div className="footer__buttons">{content}</div>
      </div>
    </footer>
  )
}

function FooterUploadBtnPanel() {
  return (
    <>
      <DenyButton label={"取消"} className={"footer__buttons_deny"} />
      <ActivateButton label={"開啟文件"} />
    </>
  )
}

function FooterCreateBtnPanel() {
  return (
    <>
      <DenyButton label={"取消"} className={"footer__buttons_deny"} />
      <ActivateButton label={"創建文件"} />
    </>
  )
}

function FooterDownloadBtnPanel() {
  return (
    <>
      <DenyButton label={"回首頁"} className={"footer__buttons_deny"} />
      <DenyButton label={"返回編輯"} className={"footer__buttons_deny"} />
      <ActivateButton label={"下載文件"} />
    </>
  )
}
