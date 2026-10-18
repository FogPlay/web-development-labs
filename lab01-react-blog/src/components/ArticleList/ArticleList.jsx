import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import styles from "./ArticleList.module.css";

function ArticleList({ articles }) {
  return (
    <section
      id="articles"
      className={styles.section}
      aria-labelledby="articles-title"
    >
      <div className={styles.heading}>
        <h2 id="articles-title">Последние статьи</h2>
        <span>Март — апрель 2026</span>
      </div>
      <div className={styles.list}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}

export default ArticleList;
