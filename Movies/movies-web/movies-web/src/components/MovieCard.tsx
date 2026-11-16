import type { Movie } from '../types/Movie';
import { getYear, formatPrice } from '../utils/format';

interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {
    return (
        <div className="card h-100 border 0 rounded-4 overflow-hidden shadow-sm">
            <div
                className="bg-secondary-subtle d-flex allign-items-center justify-content-center position-relative"
                style={{ aspectRatio: '2 / 3' }}
            >
                <span className="display-4 fw-bold text-body-sencondary">
                    {movie.title?.charAt(0) ?? '?'}
                </span>
                <span className="badge text-bg-dark position-absolute top-0 end-0 m-2">
                    {getYear(movie.releaseDate)}
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title fs-6 fw-bold mb-1">{movie.title ?? 'Sem título'}</h5>
                <p className="card-text small text-body-secondary mb-2">{movie.genre}</p>
                <span className="fw-semibold text-warning">{formatPrice(movie.price)}</span>
            </div>
        </div>
    );
} 