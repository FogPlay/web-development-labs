import styles from "./ArticleCard.module.css";

function ArticleCard({ article }) {
  const { id, title, excerpt, author, date, dateTime, tag, image, imageAlt } =
    article;

  return (
    <article className={styles.card} aria-labelledby={`article-${id}`}>
      <img
        src={image}
        alt={imageAlt}
        className={styles.image}
        width="600"
        height="300"
        loading="lazy"
      />
      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <h3 id={`article-${id}`} className={styles.title}>
          {title}
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <footer className={styles.footer}>
          <span className={styles.author}>{author}</span>
          <time dateTime={dateTime}>{date}</time>
        </footer>
      </div>
    </article>
  );
}

export default ArticleCard;
