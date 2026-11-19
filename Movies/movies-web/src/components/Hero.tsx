import { NavLink } from 'react-router';
import type { Movie } from '../types/Movie';
import { formatPrice, getYear } from '../utils/format';
import styles from './Hero.module.css';

interface Props {
  movie: Movie;
}

export default function Hero({ movie }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop}>Cena do filme</div>
      <div className={styles.content}>
        <div>
          <span className={styles.kicker}>Lançamento mais recente</span>
          <h1 className={styles.title}>{movie.title ?? 'Sem título'}</h1>
        </div>
        <div className={styles.side}>
          <p className={styles.description}>
            {movie.genre}, lançado em {getYear(movie.releaseDate)}
          </p>
          <div className={styles.actions}>
            <NavLink to={`/movies/${movie.id}`} className={styles.button}>
              Ver filme
            </NavLink>
            <span className={styles.price}>{formatPrice(movie.price)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
