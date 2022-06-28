import logo from '../../assets/images/logo.jpg'
import './Header.css'

export default function Header ({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className="container">
      <header className="header">
        <a href="/">
          <img src={logo} alt="Star Wars" className="header__logo" />
        </a>
      </header>
    </div>

  )
}
