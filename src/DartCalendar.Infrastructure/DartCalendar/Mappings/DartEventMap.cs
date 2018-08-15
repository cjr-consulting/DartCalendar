using DartCalendar.Core.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DartCalendar.Infrastructure.DartCalendar.Mappings
{
    public class DartEventMap : IEntityMap
    {
        public DartEventMap(ModelBuilder builder)
        {
            builder.Entity<DartEvent>(e =>
            {
                e.ToTable("DartEvent", "dartevent");
                e.Property(x => x.Id);
                e.Property(x => x.Name);
                e.Property(x => x.Contact);
            });
        }
    }
}
