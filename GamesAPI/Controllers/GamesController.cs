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

        // 
        // Resource: GET /games
        //
        // Returns: A list of all games
        //
        // Status codes:
        //      -200 Ok:        The request was successful.
        //
        [HttpGet]
        public async Task<IEnumerable<Game>> Get()
        {
            List<Game> GameList = await _context.Game.ToListAsync();
            return GameList;
        }

    }

}
