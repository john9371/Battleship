using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BattleshipAPI.Controllers
{
    [Route("api/[controller]")]
    public class BattleshipController : Controller
    {
        // GET api/Battleship
        [HttpGet]
        public IEnumerable<Battleship> Get()
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                return db.Battleships.ToList();
            }
        }

        // GET api/Battleship/5
        [HttpGet("{id}")]
        public Battleship Get(int id)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                return db.Battleships.First(t => t.gameId == id);
            }
        }

        // POST api/Battleship
        [HttpPost]
        public void Post([FromBody]JObject value)
        {
            Battleship posted = value.ToObject<Battleship>();
            using (BattleshipDb db = new BattleshipDb())
            {
                db.Battleships.Add(posted);
                db.SaveChanges();
            }
        }

        // PUT api/Battleship/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]JObject value)
        {
            Battleship posted = value.ToObject<Battleship>();
            posted.gameId = id; // Ensure an id is attached
            using (BattleshipDb db = new BattleshipDb())
            {
                db.Battleships.Update(posted);
                db.SaveChanges();
            }
        }

        // DELETE api/Battleship/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (BattleshipDb db = new BattleshipDb())
            {
                if (db.Battleships.Where(t => t.gameId == id).Count() > 0) // Check if element exists
                    db.Battleships.Remove(db.Battleships.First(t => t.gameId == id));
                db.SaveChanges();
            }
        }
    }
}