namespace DartCalendar.Infrastructure.DartCalendar
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using Microsoft.EntityFrameworkCore;

    public class DartCalendarContext : DbContext
    {
        public DartCalendarContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var maps = GetMappingClasses();

            foreach (var item in maps)
                Activator.CreateInstance(item, BindingFlags.Public | BindingFlags.Instance, null, new object[] { modelBuilder }, null);
        }

        private List<Type> GetMappingClasses()
        {
            return Assembly.GetExecutingAssembly().GetTypes()
                .Where(type => typeof(IEntityMap).IsAssignableFrom(type)
                               && type.IsClass
                               && type.Namespace.StartsWith("DartCalendar.Infrastructure.DartCalendar", StringComparison.CurrentCulture))
                .ToList();
        }
    }
}