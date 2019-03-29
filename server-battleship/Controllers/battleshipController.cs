using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BattleshipAPI.Controllers
{
    [ApiController]
    [Route("api/waiting/[controller]")]
    public class BattleshipController : Controller
    {
        // GET api/Battleship
        [HttpGet]
        //public IEnumerable<MatchQ> Get()
        public string Get()
        {
            // using (MatchDb db = new MatchDb())
            // {
            //     Console.Write("working maybe");
            //return db.matches.ToList();
            return ("working");
            //}
        }
        [HttpPost]
        public string Post(string name)
        {
            // bool x = false;
            // MatchQ posted = new MatchQ();
            // posted.name = name;
            // posted.ready = false;
            // using (MatchDb db = new MatchDb())
            // {
            //     while (x == false)
            //     {
            //         x = true;
            //         Random rnd = new Random();
            //         for (int i = 0; i < db.matches.ToList().Count(); i++)
            //         {
            //             if (db.matches.Where(t => t.playerId == rnd.Next(10000, 1000000)).Count() > 0) // Check if element exists
            //                 x=false;
            //         }
            //     }
            //     db.matches.Add(posted);
            //     db.SaveChanges();
            //return db.matches.playerId;
            return "working fucker";
        }
        public string Get(string name)
        {
            bool x = false;
            MatchQ posted = new MatchQ();
            posted.name = name;
            posted.ready = ready;
            using (MatchDb db = new MatchDb())
            {
                using (BattleshipDb m = new BattleshipDb())
                {
                    while (x == false)
                    {
                        x = true;
                        Random rnd = new Random();
                        for (int i = 0; i < db.matches.ToList().Count(); i++)
                        {
                            if ((m.Battleships.Where(t => t.gameId == rnd.Next(10000, 1000000)).Count() > 0) && db.matches.Where(t => t.matchId == rnd.Next(10000, 1000000)).Count() > 0) // Check if element exists
                                x = false;
                        }
                    }
                    //db.matches.Add();
                    db.SaveChanges();
                    return "working fucker";
                }
            }
        }
        // DELETE api/waiting/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (MatchDb db = new MatchDb())
            {
                if (db.matches.Where(t => t.playerId == id).Count() > 0) // Check if element exists
                    db.matches.Remove(db.matches.First(t => t.playerId == id));
                db.SaveChanges();
            }
        }

    }
    [Route("api/game/[controller]")]
    public class BattleshipGameController : Controller
    {
        // GET api/Battleship
        [HttpGet]
        //public IEnumerable<MatchQ> Get()
        public string Get(int id)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                return db.Battleships.First(t => t.gameId == id);
            }
        }
        
        [HttpPut]
        public string Put(int id, int x, int y)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                if (db.Battleships.Where(t => t.gameId == id).Count() > 0)
                {
                    db.Battleships.First(t => t.gameId == id).hit = hit;
                    if (db.IsHit.First(t => t.gameId == id).whoseTurn == 0)
                    {
                        db.IsHit.First(t => t.gameId == id).whoseTurn++;
                    }
                    else
                    {
                        db.IsHit.First(t => t.gameId == id).whoseTurn--;
                    }
                }
                else
                {
                    return "broken fucker";
                }

                db.SaveChanges();
                return "working fucker";
            }

        }
        // DELETE api/waiting/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                if (db.Battleships.Where(t => t.gameId == id).Count() > 0) // Check if element exists
                    db.Battleships.Remove(db.Battleships.First(t => t.gameId == id));
                if(db.IsHit.Where(t => t.gameId == id).Count() > 0){
                    db.IsHit.Remove(db.IsHit.First(t => t.gameId == id));
                }
                db.SaveChanges();
            }
        }
    }
    [Route("api/hit/[controller]")]
    public class BattleshipGameController : Controller
    {
        [HttpGet]
        //public IEnumerable<MatchQ> Get()
        public string Get(int id)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                return db.IsHit.First(t => t.gameId == id);
            }
        }
         [HttpPut]
        public string Put(var someRandomObject)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                var x = db.IsHit.First(t => t.gameId == someRandomObject.gameId);
                if (db.IsHit.Where(t => t.gameId == someRandomObject.gameId).Count() > 0)
                {  
                    x.hit = someRandomObject.hit;
                    x.whoseTurn = someRandomObject.whoseTurn;
                    x.isWon = someRandomObject.isWon;
                }
                else
                {
                    db.IsHit.Add(someRandomObject);
                }

                db.SaveChanges();
                return "working fucker";
            }

        }
    }
}