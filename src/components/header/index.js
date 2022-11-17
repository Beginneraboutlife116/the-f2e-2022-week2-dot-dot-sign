import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <Image src={logo} alt="logo" height={25} className="header__img" />
      <nav>
        <ul className="nav__list" role="list">
          <li>
            <button disabled className="btn nav__btn">
              邀請他人簽署
            </button>
          </li>
          <li>
            <Link href="/" className="nav__btn">
              簽署新文件
            </Link>
          </li>
          <li>
            <button className="btn nav__btn">登入</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
