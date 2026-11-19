import { useEffect, useMemo, useState } from 'react';
import type { Movie } from '../types/Movie';
import Hero from '../components/Hero';
import RecentStrip from '../components/RecentStrip';
import { getMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import styles from './MovieList.module.css';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [genre, setGenre] = useState('Todos');

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const genres = useMemo(() => ['Todos', ...new Set(movies.map((m) => m.genre))], [movies]);

  const filtered = genre === 'Todos' ? movies : movies.filter((m) => m.genre === genre);

  const byDate = useMemo(
    () => [...movies].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)),
    [movies],
  );

  const featured = byDate[0];
  const recent = byDate.slice(1, 5);

  if (loading) {
    return <section className={styles.page}>Carregando filmes...</section>;
  }

  if (error) {
    return <section className={styles.page}>Não foi possível carregar os filmes. {error}</section>;
  }

  return (
    <>
      {featured && <Hero movie={featured} />}
      {recent.length > 0 && <RecentStrip movies={recent} />}

      <section className={styles.page}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Catálogo</h2>
          <div className={styles.tabs} role="group" aria-label="Filtrar por gênero">
            {genres.map((g) => (
              <button
                key={g}
                type="button"
                className={g === genre ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => setGenre(g)}
              >
                {g}{' '}
                <sup className={styles.count}>
                  {g === 'Todos' ? movies.length : movies.filter((m) => m.genre === g).length}
                </sup>
              </button>
            ))}
          </div>
        </header>

        {filtered.length === 0 ? (
          <p className={styles.empty}>Nenhum filme encontrado.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
