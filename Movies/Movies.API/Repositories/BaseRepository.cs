using Microsoft.EntityFrameworkCore;
using Movies.API.Context;
using System.Linq.Expressions;

namespace Movies.API.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        private readonly MovieContext _movieContext;

        public BaseRepository(MovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _movieContext.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _movieContext.Set<TEntity>().FirstOrDefaultAsync(predicate);
        }
        
        public async Task CreateAsync(TEntity entity)
        {
            await _movieContext.Set<TEntity>().AddAsync(entity);
            await _movieContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(TEntity entity)
        {
            _movieContext.Set<TEntity>().Update(entity);
            await _movieContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(TEntity entity)
        {
            _movieContext.Set<TEntity>().Remove(entity);
            await _movieContext.SaveChangesAsync();
        }
    }
}
