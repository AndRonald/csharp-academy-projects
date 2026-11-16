import type { Movie } from '../types/Movie';

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/movies`;

async function handle<T>(response: Response): Promise<T> {
    if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(BASE_URL);
    return handle<Movie[]>(response);
}

export async function getMoviesById(id: string): Promise<Movie> {
    const response = await fetch(`${BASE_URL}/${id}`);
    return handle<Movie>(response);
}