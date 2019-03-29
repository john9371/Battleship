using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
namespace BattleshipAPI
{
    public class BattleshipDb : DbContext
    {
        // Reference our Battleship table using this
        public DbSet<Battleship> Battleships { get; set; }
        public DbSet<IsHit> IsHit { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Filename=../Snake/Snake/DB/HighScore.db");
        }
    }
    public class MatchDb : DbContext
    {
        // Reference our matchQ table using this
        public DbSet<MatchQ> matches { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Filename=../Snake/Snake/DB/HighScore.db");
        }
    }
    
}