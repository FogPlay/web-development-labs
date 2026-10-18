import Header from "./components/Header/Header.jsx";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import articles from "./data/articles.js";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app} id="home">
      <a className={styles.skipLink} href="#main">
        Перейти к содержанию
      </a>
      <Header articleCount={articles.length} />
      <main id="main" className={styles.main}>
        <section className={styles.intro} aria-labelledby="intro-title">
          <p className={styles.eyebrow}>ЗАМЕТКИ О ФРОНТЕНДЕ</p>
          <h1 id="intro-title">
            Разбираемся в вебе.
            <br />
            <span>По одной статье.</span>
          </h1>
          <p className={styles.description}>
            React, стили и инструменты разработки. Короткие заметки, с которых
            удобно начать.
          </p>
          <a className={styles.readLink} href="#articles">
            К статьям <span aria-hidden="true">↗</span>
          </a>
        </section>
        <ArticleList articles={articles} />
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div>
            <p className={styles.eyebrow}>О ПРОЕКТЕ</p>
            <h2 id="about-title">Первый шаг в React</h2>
          </div>
          <p>
            Учебный блог по веб-разработке. Интерфейс собран из компонентов,
            карточки получают данные из массива, а CSS-модули изолируют стили.
            Сетка адаптируется под размер экрана.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>React Blog © 2026</span>
        <span>Лабораторная работа №1</span>
        <a href="#home">Наверх ↑</a>
      </footer>
    </div>
  );
}

export default App;
