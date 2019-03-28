
using System;
using System.ComponentModel.DataAnnotations;

namespace BattleshipAPI
{
    public class Battleship
    {
        [Key]
        public int gameId { get; set; }
        [Required]
        public int xCoord { get; set; }
        public int yCoord { get; set; }
        public int whoseTurn { get; set; }
    }
}