using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using TypescriptExample.Models;

namespace TypescriptExample.Pages
{
    [IgnoreAntiforgeryToken]
    public class IndexModel : PageModel
    {
        [BindProperty]
        [Required(ErrorMessage = "Yo that email address is required so we can kick it!")]
        public string? EmailAddress { get; set; }

        public void OnGet()
        { }

        public ActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                Fruit fruit = new Fruit()
                {
                    Color = "red",
                    IsRipe = true,
                    Name = "apple",
                    SendToEmailAddress = EmailAddress
                };

                return new JsonResult(fruit);
            }
            return BadRequest();
        }
    }
}
