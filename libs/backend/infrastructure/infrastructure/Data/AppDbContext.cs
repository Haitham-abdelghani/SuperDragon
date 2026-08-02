using Microsoft.EntityFrameworkCore;
using SuperDragon.Backend.Domain.Entities;

namespace SuperDragon.Backend.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
