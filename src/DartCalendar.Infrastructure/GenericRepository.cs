using System.Linq;
using System.Threading.Tasks;
using DartCalendar.Core;
using DartCalendar.Infrastructure.DartCalendar;
using Microsoft.EntityFrameworkCore;

namespace DartCalendar.Infrastructure
{
    using System;
    using System.Collections.Generic;

    public class GenericRepository<T> : IRepository<T>
        where T : Entity
    {
        public GenericRepository(DartCalendarContext context)
        {
            Context = context;
            DbSet = context.Set<T>();
        }

        protected DartCalendarContext Context { get; }
        protected DbSet<T> DbSet { get; }

        public void Add(T entity) =>
            Context.Set<T>().Add(entity);

        public void Delete(T entity) =>
            Context.Set<T>().Remove(entity);

        public void DeleteRange(IEnumerable<T> entities) =>
            DbSet.RemoveRange(entities);

        public async Task<IReadOnlyCollection<T>> GetAll() =>
            await Context.Set<T>().ToListAsync();

        public async Task<T> GetById(long id) =>
            await DbSet.SingleAsync(e => e.Id == id);
    }
}
