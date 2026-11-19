using Microsoft.EntityFrameworkCore;

namespace Movies.API.Context
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options) : base(options)
        {
        }

        public DbSet<Models.Movie> Movies { get; set; }
    }
}
