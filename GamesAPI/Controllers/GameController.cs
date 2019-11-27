using Microsoft.AspNetCore.Mvc;
using GamesAPI.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GamesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {

        private readonly GamesContext _context;
        public GameController(GamesContext context)
        {
            _context = context;
        }

        // 
        // Resource: GET /game/{id}
        //
        // Returns: The queried game
        //
        // Status codes:
        //      -404 Not Found:     No game with id matching route parameter {id} was found.
        //      -200 Ok:            The game was found and is returned with the response.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> Get(int id)
        {
            Game game = await _context.Game.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            return Ok(game);
        }

        // 
        // Resource: POST /game
        //
        // Returns: The id of the created item.
        //
        // Status codes:
        //      -201 Created:       The game was created.
        //
        [HttpPost]
        public async Task<ActionResult<Game>> Post(Game game)
        {
            _context.Game.Add(game);
            await _context.SaveChangesAsync();
            return CreatedAtRoute("", new { id = game.Id }, game);
        }

        // 
        // Resource: DELETE /game/{id}
        //
        // Status codes:
        //      -404 Not Found:     No game with id matching route parameter {id} was found.
        //      -204 No Content:    The game was removed.
        //
        [HttpDelete("{id}")]
        public async Task<ActionResult<Game>> Delete(int id)
        {
            Game gameToDelete = await _context.Game.FindAsync(id);

            if (gameToDelete == null)
            {
                return NotFound();
            }

            _context.Game.Remove(gameToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }


        // 
        // Resource: PUT /game/{id}
        //
        // Status codes:
        //      -404 Not Found:     No game with id matching route parameter {id} was found.
        //      -204 No Content:    The game was updated.
        //
        [HttpPut("{id}")]
        public async Task<ActionResult<Game>> Put(int id, Game updateGame)
        {
            Game gameToUpdate = await _context.Game.FindAsync(id);

            if (gameToUpdate == null)
            {
                return NotFound();
            }

            _context.Update(gameToUpdate);
            gameToUpdate.Body = updateGame.Body;
            gameToUpdate.Category = updateGame.Category;
            gameToUpdate.Developer = updateGame.Developer;
            gameToUpdate.Quantity = updateGame.Quantity;
            gameToUpdate.ReleaseDate = updateGame.ReleaseDate;
            gameToUpdate.Title = updateGame.Title;
            gameToUpdate.Img = updateGame.Img;

            await _context.SaveChangesAsync();
            return NoContent();
        }

    }

}
