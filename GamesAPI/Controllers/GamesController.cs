using Microsoft.AspNetCore.Mvc;
using GamesAPI.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GamesAPI.Controllers {
     [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {

        private readonly GamesContext _context;
        public GamesController(GamesContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Game>> Get()
        {
            List<Game> GameList = await _context.Game.ToListAsync();
            return GameList;
        }

        [HttpPut]
        public async Task<Game> Put(Game updateGame)
        {
            _context.Update(updateGame);
            await _context.SaveChangesAsync();
            return updateGame;
        }

        [HttpPost]
        public async Task<Game> Post(Game newGame)
        {
            _context.Game.Add(newGame);
            await _context.SaveChangesAsync();
            return newGame;
        }

        [HttpDelete("{id}")]
        public async Task<Game> Delete(int id)
        {
            Game gameToDelete = await _context.Game.FirstAsync(game => game.Id == id);
            _context.Game.Remove(gameToDelete);
            await _context.SaveChangesAsync();
            return gameToDelete;
        }

    }

}
