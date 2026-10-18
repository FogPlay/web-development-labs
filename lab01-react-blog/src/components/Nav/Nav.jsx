import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav aria-label="Основная навигация" className={styles.nav}>
      <a href="#home">Главная</a>
      <a href="#articles">Статьи</a>
      <a href="#about">О проекте</a>
    </nav>
  );
}

export default Nav;
