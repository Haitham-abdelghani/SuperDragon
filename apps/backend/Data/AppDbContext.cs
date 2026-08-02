using Microsoft.EntityFrameworkCore;

namespace SuperDragon.Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // We will add DbSets (tables) here later as we learn, e.g.:
        // public DbSet<User> Users { get; set; }
    }
}
