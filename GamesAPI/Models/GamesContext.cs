using Microsoft.EntityFrameworkCore;

namespace GamesAPI.Models{
    public class GamesContext : DbContext {
        public GamesContext(DbContextOptions<GamesContext> options):base(options){}

        public DbSet<GamesAPI.Models.Game> Game{get; set;}
    }
}