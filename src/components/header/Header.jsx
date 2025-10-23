import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">🐹</h1>
        <button className="header__menu-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21M3 12H21M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <ul className="header__menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
