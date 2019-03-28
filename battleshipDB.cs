using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
namespace BattleshipAPI
{
    public class BattleshipDb : DbContext
    {
        // Reference our Battleship table using this
        public DbSet<Battleship> Battleships { get; set; }  
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Filename=../Snake/Snake/DB/HighScore.db");
        }
    }
}