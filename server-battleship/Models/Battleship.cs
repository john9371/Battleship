
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
    // use delete api call to determine if the other person is ready
    public class MatchQ{
        [Key]
        public int playerId { get; set; }
        public bool ready {get; set;}
        public string name { get; set; }
        public int matchId { get; set; }
    }
    public class IsHit{
        [Key]
        public int gameId { get; set; }

        public bool hit { get; set; }
        public int whoseTurn { get; set; }
        
        public bool isWon { get; set; }
    }
}