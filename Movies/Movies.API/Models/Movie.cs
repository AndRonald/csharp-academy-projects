namespace Movies.API.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Models.Enums.Genre Genre { get; set; }
        public double Price { get; set; }
    }
}
