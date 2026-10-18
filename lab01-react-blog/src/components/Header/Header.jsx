import Nav from "../Nav/Nav.jsx";
import styles from "./Header.module.css";

function Header({ articleCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="#home"
          className={styles.logo}
          aria-label="React Blog — на главную"
        >
          <span className={styles.mark} aria-hidden="true">
            rb.
          </span>
          <span>React Blog</span>
        </a>
        <Nav />
        <span className={styles.count}>Статей: {articleCount}</span>
      </div>
    </header>
  );
}

export default Header;
