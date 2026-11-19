import { NavLink } from 'react-router';
import type { Movie } from '../types/Movie';
import styles from './RecentStrip.module.css';
import { formatPrice, getYear } from '../utils/format';

interface Props {
  movies: Movie[];
}

export default function RecentStrip({ movies }: Props) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <h2 className={styles.bandTitle}>Lançamentos recentes</h2>
        <div className={styles.list}>
          {movies.map((m) => (
            <NavLink key={m.id} to={`/movies/${m.id}`} className={styles.item}>
              <div className={styles.still}></div>
              <div className={styles.row}>
                <div>
                  <span className={styles.itemTitle}>{m.title ?? 'Sem título'}</span>
                  <span className={styles.meta}>
                    {m.genre}, {getYear(m.releaseDate)}
                  </span>
                </div>
                <span className={styles.price}>{formatPrice(m.price)}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
