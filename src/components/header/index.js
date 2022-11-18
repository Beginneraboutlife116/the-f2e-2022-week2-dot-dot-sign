import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  function handleNavOpen() {
    setOpen(!open)
  }
  return (
    <header className={`header ${open ? "nav_open" : ""}`}>
      <div className="header__container">
        <Link href={"/"}>
          <Image src={logo} alt="logo" height={25} className="header__img" />
        </Link>
        <nav className="nav">
          <ul className="nav__list" role="list">
            <li className="nav__item">
              <button disabled className="btn nav__btn">
                邀請他人簽署
              </button>
            </li>
            <li className="nav__item">
              <Link href="/" className="nav__btn">
                簽署新文件
              </Link>
            </li>
            <li className="nav__item">
              <button className="btn nav__btn">登入</button>
            </li>
          </ul>
        </nav>
        <button className="btn header__toggle" onClick={handleNavOpen}>
          {/* TODO 之後使用SVG呈現 */}三
        </button>
      </div>
    </header>
  )
}
