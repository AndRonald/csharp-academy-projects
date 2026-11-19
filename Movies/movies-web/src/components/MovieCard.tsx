import { NavLink } from 'react-router';
import type { Movie } from '../types/Movie';
import styles from './MovieCard.module.css';
import { formatPrice, getYear } from '../utils/format';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <NavLink to={`/movies/${movie.id}`} className={styles.card}>
      <div className={styles.poster}>{movie.title?.charAt(0) ?? '?'}</div>
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{movie.title ?? 'Sem título'}</span>
          <span className={styles.price}>{formatPrice(movie.price)}</span>
        </div>
        <span className={styles.meta}>
          {movie.genre}, {getYear(movie.releaseDate)}
        </span>
      </div>
    </NavLink>
  );
}
