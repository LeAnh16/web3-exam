using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GamesAPI.Models
{

    public class Game
    {

        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Category { get; set; }
        public string Developer { get; set; }
        public string ReleaseDate { get; set; }
        public string Img { get; set;}
        public int Quantity { get; set; }

    }
}