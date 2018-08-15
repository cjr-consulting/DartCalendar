using System.Threading.Tasks;

namespace DartCalendar.Core
{
    using System.Collections.Generic;

    public interface IRepository<T>
        where T : Entity
    {
        void Add(T entity);
        Task<T> GetById(long id);
        Task<IReadOnlyCollection<T>> GetAll();
        void Delete(T entity);
    }
}
