import { useState } from 'react';
import MovieCard from './MovieCard';

function App() {
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);
const [status, setStatus] = useState('idle'); // idle, loading, error, success
const [error, setError] = useState(null);

const fetchMovies = async (query) => {
  setStatus('loading');
  setError(null);
 
  try {
    const res = await fetch(  
`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`    );

    if (!res.ok) throw new Error('Ошибка сети');

const data = await res.json();
 
    if (data.Error) {
      // OMDb возвращает { Error: "String" }, если ничего не найдено
      setMovies([]);
      setStatus('error');
      setError('Ничего не найдено');
      return;
    }
    setMovies(data.Search || []);
    setStatus('success');
  } catch (err) {
    setMovies([]);
    setStatus('error');
    setError(err.message);
  }
};

  return (
    <div>
<input value={query} onChange={e => setQuery(e.target.value)} />
<button onClick={() => fetchMovies(query)} disabled={status === 'loading'}>Найти</button>
{status === 'idle' && (
  <p>Введите название фильма и нажмите «Найти».</p>
)}
 
{status === 'loading' && <p>Загрузка...</p>}
 
{status === 'error' && (
  <div className="error">
    <p>Ошибка: {error}</p>
  </div>
)}
 
{status === 'success' && movies.length === 0 && (
  <p>Ничего не найдено по вашему запросу.</p>
)}
 
{status === 'success' && movies.length > 0 && (
  <div className="movie-list">
    {movies.map(movie => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
)}
    </div>
  );
}

export default App;
