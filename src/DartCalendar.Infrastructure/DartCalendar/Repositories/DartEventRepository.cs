using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DartCalendar.Core.Domain;
using DartCalendar.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DartCalendar.Infrastructure.DartCalendar.Repositories
{
    public class DartEventRepository : GenericRepository<DartEvent>, IDartEventRepository
    {
        public DartEventRepository(DartCalendarContext context)
        : base(context)
        {
        }

        public async Task<IReadOnlyCollection<DartEvent>> GetFutureEventsAsync(int numberOfDaysOut)
        {
            return await DbSet.ToListAsync();
        }

        public async Task SaveChangesAsync()
        {
            await Context.SaveChangesAsync();
        }
    }
}