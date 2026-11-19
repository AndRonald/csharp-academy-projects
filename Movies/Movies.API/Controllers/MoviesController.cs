using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movies.API.Repositories;

namespace Movies.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _movieRepository;

        public MoviesController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Movie>>> GetAllMovies()
        {
            var movies = await _movieRepository.GetAllAsync();
            return Ok(movies);
        }

        [HttpGet("{id:guid}", Name = "GetMovieById")]
        public async Task<ActionResult<Models.Movie>> GetMovieById(Guid id)
        {
            var movie = await _movieRepository.GetAsync(movieGuid => movieGuid.Id == id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        [HttpPost]
        public async Task<ActionResult<Models.Movie>> CreateMovie(Models.Movie movie)
        {
            await _movieRepository.CreateAsync(movie);
            return new CreatedAtRouteResult("GetMovieById", new { id = movie.Id }, movie);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteMovie(Guid id)
        {
            var movie = await _movieRepository.GetAsync(m => m.Id == id);

            if (movie == null)
            {
                return NotFound();
            }

            await _movieRepository.DeleteAsync(movie);
            return NoContent();
        }
    }
}
