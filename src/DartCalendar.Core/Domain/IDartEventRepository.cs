using System.Collections.Generic;
using System.Threading.Tasks;
using DartCalendar.Core.Domain.Models;

namespace DartCalendar.Core.Domain
{
    public interface IDartEventRepository : IRepository<DartEvent>
    {
        Task<IReadOnlyCollection<DartEvent>> GetFutureEventsAsync(int numberOfDaysOut);
        Task SaveChangesAsync();
    }
}