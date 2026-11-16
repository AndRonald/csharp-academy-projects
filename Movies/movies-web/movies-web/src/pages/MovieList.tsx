import { useEffect, useMemo, useState } from 'react';
import type { Movie } from '../types/Movie';
import { getMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

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
    }, [])

    const genres = useMemo(
        () => ['Todos', ...new Set(movies.map((m) => m.genre))],
        [movies]
    )

    const filtered = genre === 'Todos' ? movies : movies.filter((m) => m.genre === genre);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-warning" role="status"/>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger">Não foi possível carregar os filmes. {error}</div>;
    }

    return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <h1 className="h3 fw-bold m-0">Filmes</h1>
        <div className="btn-group" role="group" aria-label="Filtrar por gênero">
          {genres.map((g) => (
            <button
              key={g}
              type="button"
              className={`btn btn-sm ${g === genre ? 'btn-warning' : 'btn-outline-secondary'}`}
              onClick={() => setGenre(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-body-secondary">Nenhum filme encontrado.</p>
      ) : (
        <div className="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
          {filtered.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
