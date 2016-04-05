using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FirstTestMVC.Models
{
    public class ExampleContactPost
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FavoriteAnimal { get; set; }
        [Required]
        public string FavoriteColor { get; set; }
        public DateTime Time { get; set; }
    }
}