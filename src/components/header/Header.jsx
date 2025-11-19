import styles from "./Header.module.scss";
import { useState } from "react";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalShow = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuList = [
    { title: "About", id: 1 , link :"#About"},
    { title: "Skill", id: 1 , link :"#Skill"},
    { title: "Career", id: 2 , link :"#Career"},
    { title: "Project", id: 3 , link :"#Project"},

  ];
  
  const listItems = menuList.map((item) => <li key={item.id}><a href={item.link} onClick={modalShow}>{item.title}</a></li>);

  return (
    <header className={styles.header}>
      <div className={styles["header__container"]}>
        <h1 className={styles["header__logo"]}>🐹</h1>
        <button className={styles["header__menu-toggle"]} onClick={modalShow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21M3 12H21M3 6H21"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <ul className={`${styles["header__menu"]} ${isMenuOpen ? styles["header__menu--open"] : ''}`}>
            {listItems}</ul>
      </div>
    </header>
  );
}
