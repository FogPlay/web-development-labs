function MovieCard({ movie }) {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 
'https://via.placeholder.com/300x450?text=No+Poster';
 
  return (
    <article className="movie-card">
      <img src={posterUrl} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p><strong>Год:</strong> {movie.Year}</p>
      {/* Описание не приходит в поиске, только в /?i=ID. Для лабы можно опустить или добавить отдельный запрос */}
    </article>
  );
}

export default MovieCard;
