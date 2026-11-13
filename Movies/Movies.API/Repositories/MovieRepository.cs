using Movies.API.Context;
using Movies.API.Models;

namespace Movies.API.Repositories
{
    public class MovieRepository : BaseRepository<Movie>, IMovieRepository
    {
        public MovieRepository(MovieContext movieContext) : base(movieContext)
        {
        }
    }
}
